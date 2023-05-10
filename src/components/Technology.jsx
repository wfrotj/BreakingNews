import React, { useEffect, useState } from "react";
import News from "./News";
import "./GalleryNews.css";

function Technology() {
  const [news, setNews] = useState(null);
  async function getNewsData() {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=3cd55c58e3cc44baa607d91d07ca81ce"
    );
    const data = await response.json();
    setNews(data.articles);
  }

  useEffect(() => {
    getNewsData();
  }, []);
  if (news === null)
    return (
      <div className="loading">
        <p>Please wait</p>
      </div>
    );
  return (
    <div>
      <div className="hero">
        <div className="newsgallery">
          {news.map((article, index) => (
            <News key={index} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technology;
