import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Youtube from "./service/youtube";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));
const youtube = new Youtube("kdf");
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);
