import ReactGA from "react-ga4";

const initGA = (trackingId) => {
    ReactGA.initialize(trackingId); // Replace with your Measurement ID, e.g., G-XXXXXXXXXX
};

const trackPageView = (path) => {
    ReactGA.send({ hitType: "pageview", page: path });
};

const sendEventDownloadCV = (from) => {
    ReactGA.event({
        category: "user_interaction",
        action: 'download_cv',
        label: from,
    });
};

const sendEventExpand = (section) => {
    ReactGA.event({
        category: "user_interaction",
        action: "expand_section",
        label: section,
    });
};

const sendEventContactMe = (from) => {
    ReactGA.event({
        category: "user_interaction",
        action: "contact_me",
        label: from,
    });
};

const sendEventProjectCard = (project) => {
    ReactGA.event({
        category: "user_interaction",
        action: "open_project",
        label: project,
    });
};

const sendEventCloseProjectCard = (project) => {
    ReactGA.event({
        category: "user_interaction",
        action: "close_project",
        label: project,
    });
};

const sendEventGoToWebsite = (project) => {
    ReactGA.event({
        category: "user_interaction",
        action: "go_to_website",
        label: project,
    });
};

const sendEventCopyToClipboard = (text) => {
    ReactGA.event({
        category: "user_interaction",
        action: "copy_clipboard",
        label: text,
    });
};

const sendEventSocialMedia = (socialMedia) => {
    ReactGA.event({
        category: "user_interaction",
        action: "social_media",
        label: socialMedia,
    });
};

export {
    initGA,
    trackPageView,
    sendEventExpand,
    sendEventContactMe,
    sendEventDownloadCV,
    sendEventSocialMedia,
    sendEventProjectCard,
    sendEventGoToWebsite,
    sendEventCopyToClipboard,
    sendEventCloseProjectCard
};
