import React from "react";
import styles from "./search.module.css";

const Search = (props) => (
  <div>
    <div className={styles.container}>
      <img className={styles.logo} src="./images/logo.png" alt="" />
      <h1 className={styles.logoT}>youtube</h1>
      <form className={styles.searchbox} action="">
        <input
          className={styles.input}
          type="text"
          placeholder="검색어를 입력해 주세요."
        />
        <button className={styles.btn}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  </div>
);

export default Search;