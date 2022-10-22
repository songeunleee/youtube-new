class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequestOptions
    );

    console.count("mostPopular");
    const result_1 = await response.json();
    return result_1.items;
  }

  async onSearch(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    console.log("search");
    const result_1 = await response.json();
    return result_1.items.map((item) => ({ ...item, id: item.id.videoId }));
  }

  async searchedVideo(id) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${this.key}`,
      this.getRequestOptions
    );
    console.count("searchedvideo");
    const result_1 = await response.json();
    return result_1.items;
  }

  async channer(channelId) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${this.key}`,

      this.getRequestOptions
    );
    console.count("channer");
    const result_1 = await response.json();
    return result_1.items;
  }

  async comment(videoId) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?videoId=${videoId}&part=snippet&key=${this.key}`,

      this.getRequestOptions
    );
    console.count("channer");
    const result_1 = await response.json();
    return result_1.items;
  }
}

export default Youtube;