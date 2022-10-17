import React, { useRef } from "react";
import styles from "./search.module.css";

const Search = (props) => {
  const inputRef = useRef(null);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src="./images/logo.png" alt="" />
        <h1 className={styles.logoT}>YouTube</h1>
      </div>

      <form className={styles.searchbox} action="">
        <input
          ref={inputEl}
          className={styles.input}
          type="text"
          placeholder="검색어를 입력해 주세요."
        />
        <button className={styles.btn}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
