import React, { useEffect, useState } from "react";
import Search from "./components/seearch/search";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";
import VedioDetail from "./components/video_detail/vedio_detail";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState([]);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((item) => setVideos(item));
  }, []);

  const onSearch = (input) => {
    youtube
      .onSearch(input) //
      .then((item) => setVideos(item));
  };

  return (
    <>
      <div className={styles.app}>
        <Search onSearch={onSearch} />
        <VedioDetail />
        <VideoList videos={videos} youtube={youtube} />
      </div>
    </>
  );
};
export default App;
