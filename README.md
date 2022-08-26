# Personal Website

![Build](https://github.com/drinkataco/jo.shw.al/actions/workflows/main.yaml/badge.svg)

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

### Environment Variables

The listed environment variables here are used on the parceljs bundler to place variables in your javascriupt files. Consult [cdk-static-site](https://github.com/drinkataco/cdk-static-site) documentation for other environment variables which will be used in the deployment phase

- `APP_NAME` - name of your application, used in Google Analytics and CDK deployment
- `MEASUREMENT_ID` - Google Analytics Measurement ID. Leave blank for no tracking.

## CI/CD

Each branch will automatically run linting and tests.

To deploy with CICD create a tag with a semantic version. Any secrets (such as AWS credentials and .env) will be fetched in this step to deploy to the correct environment.
