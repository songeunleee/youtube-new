import React from "react";
import styles from "./search.module.css";

const Search = (props) => (
  <div>
    <h1 className={styles.logo}>youtube</h1>
    <form className={styles.searchbox} action="">
      <input
        className={styles.input}
        type="text"
        placeholder="검색어를 입력해 주세요."
      />
      <button className={styles.btn}>
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  </div>
);

export default Search;
