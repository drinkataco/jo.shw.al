import Analytics from 'analytics';
import googleAnalytics from '@analytics/google-analytics';

/**
 * Initialise Analytics and event handlers for Google Analytics
 *
 * @param appName - name  of application
 * @param measurementIds - measurement ids to use
 */
const initialiseAnalytics = (
  appName: string,
  measurementIds: string[],
): void => {
  const analytics = Analytics({
    app: appName,
    plugins: [
      googleAnalytics({
        measurementIds,
      }),
    ],
  });

  /* eslint-disable @typescript-eslint/no-floating-promises */
  analytics.page();

  document.querySelectorAll('[data-track]').forEach(
    (element: Element) => {
      element.addEventListener('click', () => {
        analytics.track((element as HTMLAnchorElement).href);
      });
    },
  );
};

export default initialiseAnalytics;
