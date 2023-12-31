import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Blog.css";

const Blog = (props) => {
  // console.log(props.blog);
  const { title, image, author, profile, published, read } = props.blog;
  const handleReadTime = props.handleReadTime;
  const handleToBookmark = props.handleToBookmark;

  return (
    <div className="blog">
      <img src={image} alt="" />
      <div className="author-container">
        <div className="authorInfo">
          <img src={profile} alt="" />
          <div className="right-side">
            <p className="author-name">{author}</p>
            <p className="publish-date">{published}</p>
          </div>
        </div>
        <p className="read-time">
          {read} min read
          <button onClick={() => handleToBookmark(title)}>
            <FontAwesomeIcon icon={faBookmark} />
          </button>
        </p>
      </div>
      <h2 className="blog-title">{title}</h2>
      <div className="hash-tag">
        <p>
          <a href="/beginners">#beginners</a>
        </p>
        <p>
          <a href="/programming">#programming</a>
        </p>
      </div>
      <button onClick={() => handleReadTime(read)} className="mark-read">
        Mark as read
      </button>
    </div>
  );
};

export default Blog;
