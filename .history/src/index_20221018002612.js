import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Youtube from "./components/service/youtube";
import App from "./app";

const youtube = new Youtube("dd");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);
