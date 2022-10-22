import styles from "./video_detail.module.css";
import React, { useEffect, useState } from "react";
import Comment from "../comment/comment";

const VedioDetail = ({ video, youtube }) => {
  const [channel, setChannel] = useState(null);
  const [comments, setComents] = useState([]);

  useEffect(() => {
    const channerId = video.snippet.channelId;
    const videoId = video.id;

    youtube
      .channer(channerId)
      .then((items) => items.map((item) => setChannel(item)));

    youtube.comment(videoId).then((items) => setComents(items));
  }, [video]);

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

  return (
    <>
      <section className={styles.video}>
        <iframe
          id="ytplayer"
          type="text/html"
          width="100%"
          height="800px"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          allowFullScreen
        />
        <div>
          <h1>{video.snippet.title}</h1>
        </div>
        <div className={styles.info}>
          <div className={styles.channelInfo}>
            <img
              className={styles.channelTumb}
              src={channel && channel.snippet.thumbnails.default.url}
              alt=""
            />
            <div className={styles.channelInfoTxt}>
              <p className={styles.chTitle}>{video.snippet.channelTitle}</p>
              <p className={styles.chCount}>
                구독자 {channel && channel.statistics.subscriberCount}명
              </p>
            </div>
          </div>
          <div className={styles.videoInfo}>
            <div className={styles.like}>
              <i className={`fa-regular fa-thumbs-up ${styles.likemark}`}></i>
              <p>
                {video.statistics.likeCount
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
            </div>
            <p className={styles.viewCount}>
              조회수{" "}
              {video.statistics.viewCount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              회
            </p>
            <p className={styles.time}>
              {publishedAt(video.snippet.publishedAt)}
            </p>
          </div>
        </div>
        <p>{video.snippet.description}</p>
        <div>
          <ul>
            {comments.map((item) => (
              <Comment key={item.id} comment={item} />;
            ))
          </ul>
        </div>
      </section>
    </>
  );
};
export default VedioDetail;
