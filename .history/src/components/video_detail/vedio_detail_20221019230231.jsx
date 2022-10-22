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
    const time = new Date(video.snippet.publishedAt);

    const milliSeconds = new Date() - time;
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `방금 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  };
  console.log(publishedAt());

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
