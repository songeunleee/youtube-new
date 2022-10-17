import React, { useState } from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video: { snippet } }) => {
  return (
    <div className={styles.container}>
      <img src={snippet.thumbnails.medium.url} alt="" />
      <div className={styles.textbox}></div>
    </div>
  );
};

export default VideoItem;
