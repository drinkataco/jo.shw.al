import initialiseAnalytics from './analytics';

const { APP_NAME } = process.env;
const { MEASUREMENT_ID } = process.env;

if (APP_NAME && MEASUREMENT_ID) {
  initialiseAnalytics(APP_NAME, [MEASUREMENT_ID]);
}
