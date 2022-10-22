import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./app";
import Youtube from "./components/service/youtube";

const youtube = new Youtube("AIzaSyAOYM6BsGM6PHnP_eKO7Cur7dBMG0u1ovU");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);
