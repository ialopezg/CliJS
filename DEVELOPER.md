# Building and Testing CustomConsoleColors

This document describes how to set up your development environment and run `Custom Console Colors` test cases.

* [Prerequisite Software](#prerequisite-software)
* [Getting the Sources](#getting-the-sources)
* [Installing NPM Modules](#installing-npm-modules)
* [Building](#building)
* [Running Tests Locally](#running-tests-locally)

See the [contribution guidelines](https://github.com/ialopezg/custom-console-colors/blob/master/CONTRIBUTING.md)
if you'd like to contribute to CustomConsoleColors.

## Prerequisite Software

Before you can build and test CustomConsoleColors, you must install and configure the
following products on your development machine:

* [Git](http://git-scm.com) and/or the **GitHub app** (for [Mac](http://mac.github.com) or
  [Windows](http://windows.github.com)); [GitHub's Guide to Installing
  Git](https://help.github.com/articles/set-up-git) is a good source of information.
* [Node.js](http://nodejs.org), (better to install the latest version) which is used to run a development web server,
  run tests, and generate distributable files. Depending on your system, you can install Node either from source or as a pre-packaged bundle.

## Getting the Sources

Fork and clone the repository:

1. Login to your GitHub account or create one by following the instructions given [here](https://github.com/signup/free).
2. [Fork](http://help.github.com/forking) the [main CustomConsoleColors repository](https://github.com/ialopezg/custom-console-colors).
3. Clone your fork of the CustomConsoleColors repository and define an `upstream` remote pointing back to
   the CustomConsoleColors repository that you forked in the first place.

```shell
# Clone your GitHub repository:
git clone git@github.com:ialopezg/custom-console-colors.git

# Go to the CustomConsoleColors directory:
cd custom-console-colors

# Add the main CustomConsoleColors repository as an upstream remote to your repository, if need it:
git remote add upstream https://github.com/ialopezg/custom-console-colors.git
```
## Installing NPM Modules

Install all CustomConsoleColors dependencies by running this command:

```shell
npm install
```

## Running Tests Locally

It would be greatly appreciated if PRs that change code come with appropriate tests.

To create a test for a specific issue opened on GitHub, create a file: `test/github-issues/<num>/issue-<num>.ts` where
`<num>` is the corresponding GitHub issue. For example, if you were creating a PR to fix github issue #363, you'd
create `test/github-issues/363/issue-363.ts`.

Then run tests:

```shell
npm test
```

You should execute test suites before submitting a PR to github.
All the tests are executed on our Continuous Integration infrastructure and a PR could only be merged once the tests pass.

**Executing only some tests**: When you are creating tests to some specific code, you may want only execute the tests that you're creating, so you waste less time to verify your code. To do this, you can temporarily modify your tests definitions adding `.only` *mocha* commands **(describe, it)**. Example:

```
describe.only('your describe test', ....)
```

>**Hint:** you can use the `--grep` flag to pass a Regex to `gulp-mocha`. Only the tests have have `describe`/`it`
>statements that match the Regex will be run. For example:
>
>```shell
>npm test -- --grep="github issues > #363"
>```
>
>This is useful when trying to get a specific test or subset of tests to pass.

### Faster developer cycle for editing code and running tests

The `npm test` script works by deleting built TypeScript code, rebuilding the codebase, and then running tests. This can take a long time.

Instead, for a quicker feedback cycle, you can run `npm run compile -- --watch` to make a fresh build and instruct TypeScript to watch for changes and only compile what code you've changed.

Once TypeScript finishes compiling your changes, you can run `npm run test-fast` (instead of `test`), to trigger a test without causing a full recompile, which allows you to edit and check your changes much faster.

## Using Docker

To run your tests you need dbms installed on your machine. Alternatively, you can use docker
with all dbms images inside it. To use dbms for your tests from docker simply run `docker-compose up`
in the root of the project. Once all images are fetched and run you can run tests.

- The docker image of mssql-server needs at least 3.25GB of RAM.
- Make sure to assign enough memory to the Docker VM if you're running on Docker for Mac or Windows

### Shutting down Docker

Execute in shell the next command:

```shell
docker-compose down # use -v if you want to to delete the generated volumes
```
