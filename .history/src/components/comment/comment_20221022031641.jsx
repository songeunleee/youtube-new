import React from "react";

const Comment = ({ comment, publishedAt }) => {
  console.log(comment);
  return (
    <>
      <img src={comment.snippet.authorProfileImageUrl} alt="" />
      <p>{comment.snippet.authorDisplayName}</p>
      <p>{`df${comment.snippet.textDisplay}`}</p>
      <p>{publishedAt(comment.snippet.publishedAt)}</p>
    </>
  );
};

export default Comment;
