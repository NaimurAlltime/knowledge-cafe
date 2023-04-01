import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [readTime, setReadTime] = useState("");
  const [time, setTime] = useState(readTime);

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
    // console.log(time);
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    // console.log(previousReadTime);
    if (previousReadTime) {
      const sum = previousReadTime + time;
      localStorage.setItem("readTime", sum);
      setReadTime(sum);
    } else {
      localStorage.setItem("readTime", time);
      setReadTime(time);
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
          ></Blog>
        ))}
      </div>
      <div className="bookmark-blogs-container">
        <div>
          <h4 className="spent-read-time">
            <span className="readTime">Spent time on read : {time} min</span>
          </h4>
        </div>
        <h2>Bookmarked Blogs : </h2>
      </div>
    </div>
  );
};

export default Blogs;
