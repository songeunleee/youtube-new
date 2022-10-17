import React, { useEffect, useState } from "react";

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
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);

  return;
};
export default app;
