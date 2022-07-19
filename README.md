# Stackbit

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Narrative

Awhile ago I was enrolled to evaluate the current state of the art in competing monorepo solutions. Prior to this endeavour, my understanding was that there were only two choices; one either chooses npm with lerna or yarn workspaces. Since this time, many new and exciting options have entered the scene.

This setup represents what I feel to be best practices for _2021_ and beyond. Granted, this is highly subjective so I will do my best to highlight some of the pros and cons of this approach as compared to other arguably solid answers to this same question at a later time.

### Also ran's

Today there are many excellent choices for building a monorepo project, and it is most likely that any one of these will meet the direct requirements of a project, so it really just comes down to Developer Experience (DX). The problem is that DX is highly subjective and often speculative. We shall therefore define DX for our purposes here as a single numeric metric; Total Cost of Incidental Complexity (TCoIC), where incidental complexity is defined as any time or effort needed to support the actual feature work (the "overhead" to the solution).

#### Using the package managers

- npm
  - As of node 16, npm now supports a limited yarn-style workspace api
  - Offers the greatest level of compatibility but lowest DX
  - Most of the maintenance cost is on the dev to keep things in
    sync and up to date
- yarn (v1)
  - The easiest to setup and get running right away
  - Does not have any mechanism to run tasks on multiple targets
    without explicitly chaining them together in the script target
  - The goals of yarn workspaces are a bit different then those of
    npm/lerna.
  - Yarn focuses more on de-duplication and selecting the best possible
    version from a range of explicit or implicit constraints.
- yarn (v2)
  - Yarn version 2 (Berry) is a whole different beast, deviating the
    most from a more standard npm, lerna, or even yarn v1 setup. There
    is even an option to rollup the entirety of `node_modules` into a single static javascript file. (`.pnp.js`)
  - Arguably the greatest DX amongst the standard package-manager
    provided solutions
- pnpm
  - a good middle ground between compatibility and state-of-the-art
  - The most resource efficient solution
  - Offers pretty much the same features as npm workspaces, only a
    more polished DX

#### Using special purpose frameworks

- lerna
- bit
- nx <--- (the chosen winner)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@stackbit/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to <http://localhost:4200/>. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
