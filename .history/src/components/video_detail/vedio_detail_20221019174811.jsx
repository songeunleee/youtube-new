import styles from "./video_detail.module.css";
import React from "react";

const VedioDetail = ({ video }) => {
  console.log(video);
  return (
    <>
      <section className={styles.video}>
        <iframe
          id="ytplayer"
          type="text/html"
          width="100%"
          height="720"
          src=`https://www.youtube.com/embed/${video.id}`
          frameBorder="0"
          allowFullScreen
        />
        <h1>{video.snippet.title}</h1>
        <p>{video.snippet.channelTitle}</p>
      </section>
    </>
  );
};
export default VedioDetail;
