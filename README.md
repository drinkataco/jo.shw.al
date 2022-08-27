# Personal Website

![Build](https://github.com/drinkataco/jo.shw.al/actions/workflows/main.yaml/badge.svg)

Personal minimum footprint website using [Parceljs](https://parceljs.org/).

The website is available to view at [https://jo.shw.al](https://jo.shw.al) and has been deployed with my static site deployment repo, [cdk-static-site](https://github.com/drinkataco/cdk-static-site).

Use `npm start` to start developement server.

Use `npm run build` to build files for a server.

## Environment Variables

The listed environment variables here are used on the parceljs bundler to place variables in your javascript files.

- `APP_NAME` - name of your application, used in Google Analytics and CDK deployment
- `MEASUREMENT_ID` - Google Analytics Measurement ID. Leave blank for no tracking.

## Linting

Use prettier to format all documents.

- Eslint (airbnb rules) are used for linting javascript and typescript.
- Stylelint is used for linting css
- pa11y is used for linting accessibility

## CI/CD

Each branch will automatically run linting and tests. Build environment variables are sourced from a repo secret named `ENV_FILE`.

To deploy with CICD create a tag with a semantic version (such as `v1.11.5`). 
