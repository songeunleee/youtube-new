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
    const result_1 = await response.json();
    return result_1.items;
  }

  async onSearch(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet,statistics&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items.map((item) => ({ ...item, id: item.id.videoId }));
  }

  async channer(channelId) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyCagQo8-dW7r4UJ9wwtVBRPBinVTZRI6Pg`,

      this.getRequestOptions
    );
    const result_1 = await response.json();
    return (result_1.items = (item) => item);
  }
}

export default Youtube;
