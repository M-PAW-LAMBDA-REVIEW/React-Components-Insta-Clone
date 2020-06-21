// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments)
  const submitComment = ({comment}) => {
    setComments(comments + comment)
  }
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map( value => { return <Comment comment={value} />})}
      <CommentInput submitComment={submitComment}/>
    </div>
  );
};

export default CommentSection;
