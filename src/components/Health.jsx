import React, { useEffect, useState } from "react";
import News from "./News";

function Health() {
  const [news, setNews] = useState(null);
  async function getNewsData() {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=3cd55c58e3cc44baa607d91d07ca81ce"
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
      <div className="mobile: grid grid-cols-1 gap-4 p-4 tablet:grid-cols-2 laptop:grid-cols-3 overflow-hidden scroll-smooth">
        {news.map((article, index) => (
          <News key={index} article={article} />
        ))}
      </div>
    </div>
  );
}

export default Health;
