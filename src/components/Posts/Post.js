/* eslint-disable react/prop-types */
import React from 'react';

import Comment from '../Comment/Comment';

import './Post.css';

function Post({ post }) {
  return (
    <div className="post">
      <div className="author">
        <img src={post.author.avatar} alt="avatar" />
        <div className="details">
          <span className="name">{post.author.name}</span>
          <span className="date">{post.date}</span>
        </div>
      </div>
      <div className="content">{post.content}</div>
      <div className="divider" />
      <div className="commentList">
        {post.comments.map(c => (
          <Comment key={c.id} comment={c} />
        ))}
      </div>
    </div>
  );
}

export default Post;
