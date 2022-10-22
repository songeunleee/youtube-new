import styles from "./video_detail.module.css";
import React, { useEffect } from "react";

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
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          allowFullScreen
        />
        <h1>{video.snippet.title}</h1>
        <p>{video.statistics.likeCount}</p>
        <p>{video.snippet.channelTitle}</p>
        <p>{video.snippet.description}</p>
      </section>
    </>
  );
};
export default VedioDetail;
