const { Octokit } = require('octokit');

const octokit = new Octokit({
  auth: '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',
});

const data_return = async (startdate, enddate) => {
  try {
    const result = await octokit.request('GET /search/repositories', {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
      q: `sort:stars created:${startdate}..${enddate}`,
      per_page: 1,
    });
    return result.data.items[0];
  } catch (error) {
    throw error;
  }
};

module.exports = data_return;
