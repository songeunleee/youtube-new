import React from "react";

const Comment = ({ comment, publishedAt }) => {
  console.log(comment.snippet.textDisplay};
  return (
    <>
      <img src={comment.snippet.authorProfileImageUrl} alt="" />
      <p>{comment.snippet.authorDisplayName}</p>
      <p>{comment.snippet.textDisplay}</p>
      <p>{publishedAt(comment.snippet.publishedAt)}</p>
    </>
  );
};

export default Comment;
