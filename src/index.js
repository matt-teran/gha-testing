import * as core from "@actions/core";
import * as github from "@actions/github";

function runGitHubAction() {
  core.info("Hello, world!");
  core.info(JSON.stringify(github.context));
}

runGitHubAction();
