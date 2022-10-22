import React, { useEffect, useState } from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video, video: { snippet }, youtube, onVideoClick }) => {
  const [channels, setChnnels] = useState(null);

  useEffect(() => {
    const channelId = snippet.channelId;
    youtube.channer(channelId).then((item) => setChnnels(item[0]));
  }, []);

  return (
    <div className={styles.box} onClick={() => onVideoClick(video)}>
      <div className={styles.container}>
        <img
          className={styles.img}
          src={snippet.thumbnails.medium.url}
          alt=""
        />
        <div className={styles.info}>
          <img
            className={styles.channelTumb}
            src={channels && channels.snippet.thumbnails.default.url}
            alt=""
          />
          <div className={styles.text}>
            <div className={styles.title}>{snippet.title}</div>
            <p className={styles.channelId}>{snippet.channelTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
