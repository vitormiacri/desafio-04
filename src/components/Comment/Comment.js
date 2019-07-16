/* eslint-disable react/prop-types */
import React from 'react';

import './Comment.css';

function Comment({ comment }) {
  return (
    <div className="comment">
      <img src={comment.author.avatar} alt="avatar" />
      <p className="content">
        <strong>{comment.author.name}</strong> {comment.content}
      </p>
    </div>
  );
}

export default Comment;
