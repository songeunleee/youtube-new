import React, { useRef } from "react";
import styles from "./search.module.css";

const Search = ({ onSearch, onclicklogo }) => {
  const inputRef = useRef(null);

  const search = (event) => {
    event.preventDefault();
    const input = inputRef.current.value;
    onSearch(input);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo} onClick={() => onclicklogo()}>
        <img className={styles.logoImg} src="./images/logo.png" alt="" />
        <h1 className={styles.logoT}>YouTube</h1>
      </div>

      <form className={styles.searchbox} onSubmit={search}>
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          placeholder="검색어를 입력해 주세요."
        />
        <button className={styles.btn}>
          <i className={`fa-solid fa-magnifying-glass ${styles.btni}`}></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
