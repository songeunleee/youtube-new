import styles from "./video_detail.module.css";
import React from "react";

const VedioDetail = (props) => {
  return (
    <>
      <section>
        <iframe
          id="ytplayer"
          type="text/html"
          width="720"
          height="405"
          src="https://www.youtube.com/embed/M7lc1UVf-VE"
          frameborder="0"
          allowfullscreen
        />
      </section>
    </>
  );
};
export default VedioDetail;
