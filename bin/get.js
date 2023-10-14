const data_return = require('./data');

// Send the request with the arguments

const get_all = async (startdate, enddate) => {
  try {
    const repository = await data_return(startdate, enddate);
    if (!repository) {
      console.log('No results find');
    } else {
      console.log(repository);
    }
  } catch (error) {
    console.log(`Oops, an unexpected error arrived : ${error}`);
  }
};

const get_summary = async (startdate, enddate) => {
  try {
    const repository = await data_return(startdate, enddate);
    if (!repository) {
      console.log('No results find');
    } else {
      console.log(
        `\n`,
        `Name : ${repository.name}\n`,
        `Full name : ${repository.full_name}\n`,
        `Url : ${repository.html_url}\n`,
        `Description : ${repository.description}\n`
      );
    }
  } catch (error) {
    console.log(`Oops, an unexpected error arrived : ${error}`);
  }
};

module.exports = { get_all, get_summary };
