import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import Youtube from "C:Userssongeun\react\react-basicyoutube-myselfsrccomponentsserviceyoutube.js";

const youtube = new Youtube("sdf");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);
