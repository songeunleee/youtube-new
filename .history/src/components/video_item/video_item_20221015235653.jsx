import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video }) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=UC0VVYtw21rg2cokUystu2Dw&key=AIzaSyAOYM6BsGM6PHnP_eKO7Cur7dBMG0u1ovU",

    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  return (
    <div className={styles.container}>
      <img src={video.snippet.thumbnails.medium.url} alt="" />
      <div className={styles.textbox}></div>
    </div>
  );
};

export default VideoItem;
