import React from "react";
import ReactDOM from "react-dom";
import Raven from "raven-js";
import registerServiceWorker from "./registerServiceWorker";
import "./polyfills/endsWith";
import "./polyfills/performance";
import "./utils/visibility";
import "./index.css";
import Root from "./Components/Root";
import configureStore from "./configureStore";

const store = configureStore();

Raven.config("https://75a8117570924a2eb142da7e40a17968@sentry.io/204785", {
  release: "2.0.0"
}).install();

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
registerServiceWorker();
