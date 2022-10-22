import styles from "./loading.module.css";

import React from "react";

const Loading = (props) => (
  <>
    <div>
      <img className={styles.loading} src="./images/logo.png" alt="" />;
    </div>
  </>
);

export default Loading;
