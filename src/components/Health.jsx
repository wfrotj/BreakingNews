import React, { useEffect, useState } from "react";
import News from "./News";

const baseUrl = "https://news-headlines.onrender.com/news/health";
function Health() {
  const [news, setNews] = useState(null);
  async function getNewsData() {
    const response = await fetch(baseUrl);
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
      <div className="mobile: grid mobile:grid-cols-1 mobile:gap-4 mobile:p-4 tablet:grid-cols-2 laptop:grid-cols-3 overflow-hidden scroll-smooth">
        {news.map((article, index) => (
          <News key={index} article={article} />
        ))}
      </div>
    </div>
  );
}

export default Health;
