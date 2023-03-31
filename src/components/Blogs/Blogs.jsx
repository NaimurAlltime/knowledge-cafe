import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="blogs-container">
      <div className="blog-container">
        <h2>Blog container: {blogs.length}</h2>
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
      <div className="bookmark-blogs-container">
        <h2>Bookmarked Blogs : 8</h2>
      </div>
    </div>
  );
};

export default Blogs;
