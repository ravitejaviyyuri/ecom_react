import ReactGA from 'react-ga';
import config from '../config/app';

const initGA = () => {
  // console.log('GA init');
  ReactGA.initialize(config.googleAnalyticsId);
};

const logGAPageView = () => {
  // console.log(`Logging pageview for ${window.location.pathname}`);
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

const logGAEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

const logGAException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};


export { initGA, logGAPageView, logGAEvent };
