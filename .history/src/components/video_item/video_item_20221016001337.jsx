import React, { useState } from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video: { snippet } }) => {
  const [channels, setChnnels] = useState([]);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${snippet.channelId}&key=AIzaSyAOYM6BsGM6PHnP_eKO7Cur7dBMG0u1ovU`,

    requestOptions
  )
    .then((response) => response.text())
    .then((result) => setChnnels(result.items))
    .catch((error) => console.log("error", error));

  return (
    <div className={styles.container}>
      <img src={snippet.thumbnails.medium.url} alt="" />
      <div className={styles.info}>
        <img
          src={
            channels &&
            channels.map((channel) =>
              console.log(channel.thumbnails.default.url)
            )
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default VideoItem;
