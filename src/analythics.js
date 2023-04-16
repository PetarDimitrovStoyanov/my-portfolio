import ReactGA from 'react-ga';

export const initGA = (trackingId) => {
    ReactGA.initialize(trackingId);
};

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = '', action = '') => {
    if (category && action) {
        ReactGA.event({ category, action });
    }
};
