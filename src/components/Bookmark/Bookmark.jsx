import React from "react";
import "./Bookmark.css";

const Bookmark = ({ bookmark }) => {
  // console.log(bookmark);
  return (
    <div>
      <h2>Bookmarked Blogs : {bookmark.length} </h2>
      {bookmark.map((title) => (
        <h3 className="bookmark-title">{title}</h3>
      ))}
    </div>
  );
};

export default Bookmark;
