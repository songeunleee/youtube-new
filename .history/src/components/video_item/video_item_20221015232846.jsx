import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video }) => (
  <div className={styles.container}>
    <img src={video.snippet.thumbnail.high.url} alt="" />
  </div>
);

export default VideoItem;
