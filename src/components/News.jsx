import React, { useEffect, useState } from "react";

function News({ article }) {
  const { title, urlToImage } = article;
  const { name } = article.source;

  const [catImageUrl, setCatImageUrl] = useState(null);

  useEffect(() => {
    if (!urlToImage) {
      fetchCatImage();
    }
  }, [urlToImage]);

  const fetchCatImage = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0 && data[0].url) {
          setCatImageUrl(data[0].url);
        }
      })
      .catch((error) => {
        console.error("Error fetching cat image:", error);
      });
  };

  return (
    <div className="">
      <div className="mobile:flex flex-col bg-white hover:drop-shadow-2xl laptop:grid-cols-3 cursor-pointer w-100 h-92">
        {urlToImage ? (
          <img
            className="p-1 w-100 h-72"
            src={urlToImage}
            alt="image description"
          />
        ) : (
          catImageUrl && (
            <img
              className="p-1 w-100 h-72"
              src={catImageUrl}
              alt="alternative image description"
            />
          )
        )}
        <div className="mobile:text-justify">
          <p className="mobile:font-semibold tablet:font-bold text-lg">
            {title}
          </p>
          <p className="mobile:underline underline-offset-4">{name}</p>
        </div>
      </div>
    </div>
  );
}

export default News;
