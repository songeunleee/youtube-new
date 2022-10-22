import styles from "./video_list.module.css";
import React from "react";
import VideoItem from "../video_item/video_item";

const VideoList = ({ videos, youtube,onVideoClick }) => (
  <ul className={styles.list}>
    {videos.map((video) => (
      <VideoItem key={video.id} video={video} youtube={youtube} onVideoClick=[onVideoClick] />
    ))}
  </ul>
);

export default VideoList;
