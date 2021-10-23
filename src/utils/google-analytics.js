import ReactGA from "react-ga";

export const initGoogleAnalytics = () => {
    ReactGA.initialize("G-440DXY8Y31");
};

// Which pages our users are viewing
export const trackGoogleAnalyticsPageView = (page) => {
    ReactGA.pageview(page);
};

// Track visits on Modals
// When modal is viewed trackGoogleAnalyticsModalView("Name to recognize this modal on GA");
export const trackGoogleAnalyticsModalView = (modal) => {
    ReactGA.modalview(modal);
};



