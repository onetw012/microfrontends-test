import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

const appName = "microfrontend-2";

const mountApp = ({detail}) => {
    if (!detail) return;
    ReactDOM.render(<App />, document.getElementById(detail.containerId), () => {
        console.log('Rendered microfrontend-2!');
    });
};
const unmountApp = () => {
    window.removeEventListener(`${appName}: mount`, mountApp);
    window.removeEventListener(`${appName}: unmount`, unmountApp);
};

window.addEventListener(`${appName}: mount`, mountApp);
window.addEventListener(`${appName}: unmount`, unmountApp);
