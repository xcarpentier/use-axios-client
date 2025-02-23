# Contributing to use-axios-client

Contributing to `use-axios-client` isn't limited to just filing bugs. Users are more than welcomed to make suggestions, report any issue they may find, and make pull requests to help make `use-axios-client` better.

## Working on use-axios-client

### Requirements

- [Git](https://git-scm.com/)
- Latest version of [NodeJS](https://nodejs.org/en/)

### Getting use-axios-client

Clone the repository:

```sh
$ git clone https://github.com/angelle-sw/use-axios-client
```

Install library dependencies:

```
$ yarn
```

Run tests (implicitly re-runs on code changes):

```
$ yarn test
```

Boot up the example app at [http://localhost:8080](http://localhost:8080) (implicitly rebuilds on code changes):

```
$ cd example
$ yarn
$ yarn start
```

### Using branches

When working on any issue on Github, it's a good practice to make branches that are specific to the issue you're currently working on. For instance, if you're working on an issue with a name like "Add caching layer #692", from the master branch run the following code: e.g. `git checkout -b issue-692-add-caching-layer`.

### Finding issues to fix

After you've forked and cloned our repo, you can find issues to work on by heading over to our [issues list](https://github.com/angelle-sw/use-axios-client/issues).
