# Personal Website

Personal minimum footprint website using [Parceljs](https://parceljs.org/).

Use `npm start` to start developement server.

Use `npm run build` to build files for a server.

## Linting

Use prettier to format all documents.

- Eslint (airbnb rules) are used for linting javascript and typescript.
- Stylelint is used for linting css
- pa11y is used for linting accessibility

## Deployment

Use `npm run deploy` to deploy using the [cdk-static-site](https://github.com/drinkataco/cdk-static-site) deployment suite.

Please consult the readme of this repo for how to set up a .env file (which should be placed on the root of this repo). The content path of this deployment will always be set to the current directoy.

## CI/CD

[TODO]

Each branch will automatically run linting and tests.

To deploy with CICD create a tag with a semantic version. Any secrets (such as AWS credentials and .env) will be fetched in this step to deploy to the correct environment.
