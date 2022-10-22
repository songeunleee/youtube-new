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

  const onVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <>
      <div className={styles.app}>
        <Search onSearch={onSearch} />
        <div className={styles.video}>
          <div className={styles.list}>
            {selectedVideo && (
              <div className={styles.detail}>
                <VedioDetail video={selectedVideo} />
              </div>
            )}

            <VideoList
              videos={videos}
              youtube={youtube}
              onVideoClick={onVideoClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
