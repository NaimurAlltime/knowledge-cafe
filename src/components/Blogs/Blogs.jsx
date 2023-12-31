import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Blog from "../Blog/Blog";
import Bookmark from "../Bookmark/Bookmark";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [readTime, setReadTime] = useState("");
  const [time, setTime] = useState(readTime);
  const [bookmark, setBookmark] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  useEffect(() => {
    const getReadTime = localStorage.getItem("readTime");
    setTime(getReadTime);
  }, [readTime]);

  const handleReadTime = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousReadTime) {
      const sum = previousReadTime + time;
      localStorage.setItem("readTime", sum);
      setReadTime(sum);
    } else {
      localStorage.setItem("readTime", time);
      setReadTime(time);
    }
  };

  const handleToBookmark = (blogTitle) => {
    const previous = [...bookmark];
    if (!previous.includes(blogTitle)) {
      const newBookmark = [...bookmark, blogTitle];
      setBookmark(newBookmark);
    } else {
      toast("already item added!");
    }
  };

  return (
    <div className="blogs-container">
      <div className="blog-container">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleReadTime={handleReadTime}
            handleToBookmark={handleToBookmark}
          ></Blog>
        ))}
      </div>
      <div className="bookmark-blogs-container">
        <div>
          <h4 className="spent-read-time">
            <span className="readTime">Spent time on read : {time} min</span>
          </h4>
        </div>
        <Bookmark bookmark={bookmark}></Bookmark>
      </div>
    </div>
  );
};

export default Blogs;
