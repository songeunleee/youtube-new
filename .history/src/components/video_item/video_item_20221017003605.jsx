import React, { useEffect, useState } from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video: { snippet } }) => {
  const [channels, setChnnels] = useState([]);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  useEffect(
    fetch({
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${snippet.channelId}&key=AIzaSyAOYM6BsGM6PHnP_eKO7Cur7dBMG0u1ovU`,

      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setChnnels(result.items))
      .catch((error) => console.log("error", error)},[]
    
  );

  return (
    <div className={styles.container}>
      s
      <img src={snippet.thumbnails.medium.url} alt="" />
      <div className={styles.info}>
        <img
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
  );
};

export default VideoItem;
