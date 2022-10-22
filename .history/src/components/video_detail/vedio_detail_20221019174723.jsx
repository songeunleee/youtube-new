import styles from "./video_detail.module.css";
import React from "react";

const VedioDetail = ({ video }) => {
  return (
    console.log(video);
    <>
      <section className={styles.video}>
        <iframe
          id="ytplayer"
          type="text/html"
          width="100%"
          height="720"
          src="https://www.youtube.com/embed/M7lc1UVf-VE"
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
