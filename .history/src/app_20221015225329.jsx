import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";

const app = (props) => {
  const [videos, setvideos] = useState([]);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAOYM6BsGM6PHnP_eKO7Cur7dBMG0u1ovU",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => (result) => setvideos(result))
      .catch((error) => console.log("error", error));
  }, []);

  return <VideoList videos={videos} />;
};
export default app;
