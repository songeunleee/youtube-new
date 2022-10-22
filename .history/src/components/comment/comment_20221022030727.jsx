import React from "react";

const Comment = ({ comment }) => {
  console.log(comment);
  return (
    <>
      <img src={comment.snippet.authorProfileImageUrl} alt="" />
      <p>{comment.snippet.authorDisplayName}</p>
    </>
  );
};

export default Comment;
