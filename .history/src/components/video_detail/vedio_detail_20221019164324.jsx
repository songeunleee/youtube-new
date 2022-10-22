import styles from "./video_detail.module.css";
import React from "react";

const VedioDetail = ({ vedio }) => {
  console.log(vedio);
  return (
    <>
      <section className={styles.video}>
        <iframe
          id="ytplayer"
          type="text/html"
          width="720"
          height="405"
          src="https://www.youtube.com/embed/M7lc1UVf-VE"
          frameBorder="0"
          allowfullscreen
        />
      </section>
      <h1></h1>
    </>
  );
};
export default VedioDetail;
