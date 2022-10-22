import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./app";
import Youtube from "./components/service/youtube";

const youtube = new Youtube("AIzaSyCagQo8-dW7r4UJ9wwtVBRPBinVTZRI6Pg");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App youtube={youtube} />);
