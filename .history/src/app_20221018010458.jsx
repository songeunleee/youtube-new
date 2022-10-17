import React, { useEffect, useState } from "react";
import Search from "./components/seearch/search";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube.mostPopular().then((item) => setVideos(item));
  }, []);

  const onSearch = (input) => {
    youtube.onSearch(input).then(console.log);
  };

  return (
    <>
      <div className={styles.app}>
        <Search onSearch={onSearch} />
        <VideoList videos={videos} />
      </div>
    </>
  );
};
export default App;
