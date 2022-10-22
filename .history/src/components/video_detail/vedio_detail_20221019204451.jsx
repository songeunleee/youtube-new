import styles from "./video_detail.module.css";
import React, { useEffect, useState } from "react";

const VedioDetail = ({ video, youtube }) => {
  const [channelUrl, setChnnelUrl] = useState(null);

  useEffect(() => {
    const channerId = video.snippet.channelId;
    youtube.channer(channerId).then((items) => setChnnelUrl(items[0].snippet.thumbnails.default.url));
  }, []);

  console.log(channelUrl);

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
          <img src={} alt="" />
        </div>
        <p>{video.snippet.description}</p>
      </section>
    </>
  );
};
export default VedioDetail;
