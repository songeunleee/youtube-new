import React from "react";

const Comment = ({ comment, publishedAt }) => {
  return (
    <>
      <img src={comment.snippet.authorProfileImageUrl} alt="" />
      <p>{comment.snippet.authorDisplayName}</p>
      <p>{comment.snippet.textDisplay}</p>
      <p>{publishedAt(comment.snippet.publishedAt)}</p>
    </>
  );

  console.log(comment.snippet.textDisplay);
};

export default Comment;
