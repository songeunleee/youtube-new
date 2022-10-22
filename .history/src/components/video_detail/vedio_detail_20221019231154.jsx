import styles from "./video_detail.module.css";
import React, { useEffect, useState } from "react";

const VedioDetail = ({ video, youtube }) => {
  const [channelUrl, setChnnelUrl] = useState(null);

  useEffect(() => {
    const channerId = video.snippet.channelId;
    youtube
      .channer(channerId)
      .then((items) => setChnnelUrl(items[0].snippet.thumbnails.default.url));
  }, []);

  const publishedAt = () => {
    const now = new Date();
    const time = new Date(video.snippet.publishedAt);

    const t = (now - time) / 1000;

    if (t < 60) return Math.floor(t) + "초 전";
    const tm = t / 60;
    if (tm < 60) return Math.floor(t) + "초 전";
    const th = tm / 60;
    if (th < 24) return Math.floor(t) + "초 전";
    const td = th / 24;
    if (td < 8) return Math.floor(t) + "초 전";
    const tw = td / 7;
    if (tw < 5) return Math.floor(t) + "초 전";
    const tmon = td / 30;
    if (tw < 30) return Math.floor(t) + "초 전";
    const ty = td / 365;
    return Math.floor(t) + "초 전";
  };
  publishedAt();

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
          <img src={channelUrl} alt="" />
          <div>{video.snippet.channelTitle}</div>
          <i className="fa-regular fa-thumbs-up"></i>
          <p>{video.statistics.likeCount}</p>
          <p>{video.statistics.ViewCount}</p>
          <p>{video.snippet.publishedAt}</p>
        </div>
        <p>{video.snippet.description}</p>
      </section>
    </>
  );
};
export default VedioDetail;
