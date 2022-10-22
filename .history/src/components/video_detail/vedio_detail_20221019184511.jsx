import styles from "./video_detail.module.css";
import React, { useEffect } from "react";

const VedioDetail = ({ video, youtube }) => {
  console.log(video);
  useEffect(() => {
    const channelId = snippet.channelId;
    youtube.channer(channelId).then(console.log);
  }, []);
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
        <div>
          <h1>{video.snippet.title}</h1>
        </div>
        <div className={styles.info}>
          <p>{video.snippet.channelTitle}</p>
          <p>{video.statistics.likeCount}</p>
        </div>
        <p>{video.snippet.description}</p>
      </section>
    </>
  );
};
export default VedioDetail;
