class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOption = {
      method: "GET",
      redirect: "follow",
    };
  }

  mostPopular() {
    const response = fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCagQo8-dW7r4UJ9wwtVBRPBinVTZRI6Pg",
      requestOptions
    );
    const result = response.json();
    return result.items;
  }

  onSearch(input) {
    const response = fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&
        q=${input}&key=AIzaSyAOYM6BsGM6PHnP_eKO7Cur7dBMG0u1ovU`,
      requestOptions
    );
    const result = response.json();
    return result.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}

export default Youtube;
