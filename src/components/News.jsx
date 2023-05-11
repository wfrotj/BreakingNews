import React from "react";
import "./News.css";
import LongDate from "./utils/LongDate";

function News({ article }) {
  const { title, urlToImage, description, url, publishedAt } = article;
  const { name } = article.source;
  return (
    <article className="news-container">
      <div className="image-container">
        <img src={urlToImage} />
      </div>
      <div className="details">
        <h1>
          <a href={url} target="_blank">
            {title}
          </a>
        </h1>
        <p className="source">{name}</p>
        <p>{LongDate({ publishedAt })}</p>
        <div className="description">
          {description}
          <button onClick={showMore}>Read more..</button>
        </div>
      </div>
    </article>
  );
}

export default News;
