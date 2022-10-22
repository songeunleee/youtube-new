import React, { useEffect, useState } from "react";
import Search from "./components/seearch/search";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";
import VedioDetail from "./components/video_detail/vedio_detail";
import Loading from "./components/loading/loading";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((item) => setVideos(item));
  }, []);

  const onSearch = (input) => {
    setSelectedVideo(null);
    setLoading(true);
    youtube
      .onSearch(input) //
      .then((item) => setVideos(item));
    setLoading(false);
  };

  const onVideoClick = (video) => {
    youtube
      .searchedVideo(video.id)
      .then((items) => items.map((item) => setSelectedVideo(item)));
  };

  const onClicklogo = () => {
    setSelectedVideo(null);
    youtube
      .mostPopular() //
      .then((item) => setVideos(item));
  };

  return (
    <>
      <div className={styles.app}>
        <Search onSearch={onSearch} onClicklogo={onClicklogo} />
        {loading ? (
          <Loading />
        ) : (
          <div className={styles.video}>
            {selectedVideo && (
              <div className={styles.detail}>
                <VedioDetail youtube={youtube} video={selectedVideo} />
              </div>
            )}
            <div className={styles.list}>
              <VideoList
                videos={videos}
                youtube={youtube}
                onVideoClick={onVideoClick}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default App;
