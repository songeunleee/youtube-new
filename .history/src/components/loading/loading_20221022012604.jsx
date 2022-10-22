import styles from "./loading.module.css";

import React from "react";

const Loading = (props) => (
  <>
    <div className={styles.box}>
      <img className={styles.loading} src="./images/logo.png" alt="" />
    </div>
  </>
);

export default Loading;
