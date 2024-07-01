import * as core from "@actions/core";
import * as github from "@actions/github";

function runGitHubAction() {
  core.info("Hello, world!");
  core.info(JSON.stringify(github.context));
  const input = core.getInput("ignore-head-environment-not-found-error", {
    required: false,
  });
  if (input == null) {
    core.info("input is nullish: " + input.length);
  } else {
    core.info("input is not nullish: " + input.length);
  }
}

runGitHubAction();
