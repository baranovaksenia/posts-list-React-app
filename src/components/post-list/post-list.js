import React from "react";
import PostListItem from "../post-list-item/post-list-item";
import "./post-list.css";

const PostList = ({ posts }) => {
  // get data from App.js
  //dynamic create every post
  const elements = posts.map((item) => {
    // loop -> new array
    return (
      <li className="list-group-item">
        <PostListItem label={item.label} important={item.important} />
      </li>
    );
  });
  return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;
