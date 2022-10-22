import React, { useEffect, useState } from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video, video: { snippet }, youtube, onVideoClick }) => {
  const [channels, setChnnels] = useState(null);

  const publishedAt = (publishedAt) => {
    const now = new Date();
    const time = new Date(publishedAt);

    const t = (now - time) / 1000;

    if (t < 60) return Math.floor(t) + "초 전";
    const tm = t / 60;
    if (tm < 60) return Math.floor(tm) + "분 전";
    const th = tm / 60;
    if (th < 24) return Math.floor(th) + "시간 전";
    const td = th / 24;
    if (td < 8) return Math.floor(td) + "일 전";
    const tw = td / 7;
    if (tw < 5) return Math.floor(tw) + "주 전";
    const tmon = td / 30;
    if (tw < 30) return Math.floor(tmon) + "달 전";
    const ty = td / 365;
    return Math.floor(ty) + "년 전";
  };

  useEffect(() => {
    const channelId = snippet.channelId;
    youtube.channer(channelId).then((item) => setChnnels(item[0]));
  }, []);

  return (
    <div className={styles.box} onClick={() => onVideoClick(video)}>
      <div className={styles.container}>
        <img
          className={styles.img}
          src={snippet.thumbnails.medium.url}
          alt=""
        />
        <div className={styles.info}>
          <img
            className={styles.channelTumb}
            src={channels && channels.snippet.thumbnails.default.url}
            alt=""
          />
          <div className={styles.text}>
            <p className={styles.title}>{snippet.title}</p>
            <div className={styles.minitext}>
              <p className={styles.channelId}>{snippet.channelTitle}</p>
              <p className={styles.channelId}>
                {publishedAt(snippet.publishedAt)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
