import React, { useEffect, useState } from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video: { snippet }, youtube, onVideoClick }) => {
  const [channels, setChnnels] = useState([]);

  useEffect(() => {
    const channelId = snippet.channelId;
    youtube.channer(channelId).then((item) => setChnnels(item));
  }, []);

  return (
    <div className={styles.box} onClick={onVideoClick}>
      <div className={styles.container}>
        <img
          className={styles.img}
          src={snippet.thumbnails.medium.url}
          alt=""
        />
        <div className={styles.info}>
          <img
            className={styles.channelTumb}
            src={
              channels &&
              channels.map((channel) => channel.snippet.thumbnails.default.url)
            }
            alt=""
          />
          <div className={styles.text}>
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.channelId}>{snippet.channelTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
