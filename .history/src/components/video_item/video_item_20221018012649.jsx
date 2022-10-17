import React, { useEffect, useState } from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video: { snippet }, youtube }) => {
  const [channels, setChnnels] = useState([]);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  useEffect(() => {
    const channelId = snippet.channelId;
    this.props.youtube.mostPopular().then(console.log);
  }, []);

  return (
    <div className={styles.box}>
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
