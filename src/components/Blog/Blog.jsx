import React from "react";
import "./Blog.css";

const Blog = (props) => {
  console.log(props.blog);
  const { title, image, author, profile, published, read } = props.blog;
  return (
    <div>
      <img src={image} alt="" />
      <h2>{title}</h2>
    </div>
  );
};

export default Blog;
