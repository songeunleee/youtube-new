import styles from "./video_detail.module.css";
import React from "react";

const VedioDetail = ({ video }) => {
  return (
    <>
      <section className={styles.video}>
        <iframe
          id="ytplayer"
          type="text/html"
          width="800"
          height="405"
          src="https://www.youtube.com/embed/M7lc1UVf-VE"
          frameBorder="0"
          allowFullScreen
        />
      </section>
      <h1>{video.snippet.title}</h1>
    </>
  );
};
export default VedioDetail;
