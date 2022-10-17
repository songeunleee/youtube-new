import React, { useEffect, useState } from "react";
import Search from "./components/seearch/search";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";

const App = (props) => {
  const [videos, setVideos] = useState([]);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCagQo8-dW7r4UJ9wwtVBRPBinVTZRI6Pg",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  const onSearch = (input) => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${input}&key=AIzaSyAOYM6BsGM6PHnP_eKO7Cur7dBMG0u1ovU`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
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
