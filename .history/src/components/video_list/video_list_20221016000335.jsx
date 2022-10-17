import styles from "./video_list.module.css";
import React from "react";
import VideoItem from "../video_item/video_item";

const VideoList = ({ videos }) => ({
    const [channels, setChnnels] = useState([]);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${snippet.channelId}&key=AIzaSyAOYM6BsGM6PHnP_eKO7Cur7dBMG0u1ovU`,

    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  <ul>
    {videos.map((video) => (
      <VideoItem key={video.id} video={video} />
    ))}
  </ul>
}
);

export default VideoList;
