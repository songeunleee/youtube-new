import React, { useEffect, useState } from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video: { snippet } }) => {
  const [channels, setChnnels] = useState([]);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${snippet.channelId}&key=AIzaSyAOYM6BsGM6PHnP_eKO7Cur7dBMG0u1ovU`,

      requestOptions
    )
      .then((response) => response.text())
      .then((result) => setChnnels(result.items))
      .then((result) => console.log(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className={styles.container}>
      <img src={snippet.thumbnails.medium.url} alt="" />
      <div className={styles.info}>
        <img
          src={
            channels &&
            channels.map((channel) => channel.thumbnails.default.url)
          }
          alt=""
        />
        <div className={styles.text}>
          <p className={styles.title}>
            {channels &&
              channels.map((channel) => channel.thumbnails.default.url)}
          </p>
          <p className={styles.channelId}>{snippet.channelTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
