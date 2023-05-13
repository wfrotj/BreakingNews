import React from "react";

function News({ article }) {
  // const showMore = () => {
  //   description
  // }
  const { title, urlToImage } = article;
  const { name } = article.source;
  return (
    <div className="">
      <div className="mobile:flex flex-col bg-white hover:drop-shadow-2xl laptop:grid-cols-3 cursor-pointer w-100 h-92">
        <img
          className="p-1 w-100 h-72"
          src={urlToImage}
          alt="image description"
        />
        <div className="mobile: text-justify ">
          <p className="mobile: font-semibold tablet:font-bold text-lg">
            {title}
          </p>
          <p className="mobile: underline underline-offset-4">{name}</p>
        </div>
      </div>
    </div>
  );
}

export default News;
