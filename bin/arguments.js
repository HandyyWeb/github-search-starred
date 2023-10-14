const yargs = require('yargs');
const usage = 'Usage : gis <start date YYYY-MM-DD> <end date YYYY-MM-DD>';
const options = yargs
  .usage(usage)
  .check((argv) => {
    // Check for the right numbers of arguments
    if (argv._.length < 2 && argv.s.length < 2) {
      throw new Error('Missing arguments');
    } else if (argv._.length > 2 && argv.s.length > 2) {
      throw new Error('Too many arguments');
    } else {
      return true;
    }
  })
  .options('summary', {
    alias: 's',
    describe: 'Get a light overview of the repository',
    type: 'array',
    demandOption: false,
  })
  .help(true).argv;
const args = yargs.argv;

module.exports = { args: args._, options: args.s };
