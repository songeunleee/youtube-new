import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";

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

  return (
    <>
      <VideoList videos={videos} />
    </>
  );
};
export default App;
