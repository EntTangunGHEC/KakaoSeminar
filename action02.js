const { Octokit } = require("@octokit/rest");
const core = require('@actions/core');
const github = require('@actions/github');

const octokit = new Octokit({
    auth: core.getInput('github_token'),
    userAgent: 'myApp v0.0.1',
    baseUrl: 'https://api.github.com'
    });


octokit.request('POST /repos/{owner}/{repo}/issues/{issue_number}/labels', {
    owner: 'EntTangunGHEC',
    repo: 'KakaoSeminar',
    issue_number: core.getInput('issue_number'),
    labels: [
      'bug'
    ]
  });
