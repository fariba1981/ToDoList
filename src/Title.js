import React, { useState, useEffect } from "react";
import "./title.css";

function Title() {
  const cardTitle = window.localStorage.getItem("title") || "card name";
  const [title, setTitle] = useState(cardTitle);

  useEffect(() => {
    window.localStorage.setItem("title", title);
  }, [title]);

  return (
    <input
      className="title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    ></input>
  );
}

export default Title;
