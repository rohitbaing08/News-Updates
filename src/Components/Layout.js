import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import "../Styles/style.css";
const Layout = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=9cdd0be3853f479abbb78f6bb7b32e0e"
      )
      .then((res) => {
        if (res.data.status === "ok") {
          setData(res.data.articles);
          console.log(res.data.articles);
        }
      });
  }
  return (
    <div className="container">
      <h1 className="title">
        BBC NEWS CHANNEL
      </h1>
      <div className="layout">
        {data.map((item) => (
          <figure key={data.indexOf(item)} className="snip1347">
            <img src={item.urlToImage} alt={`image${data.indexOf(item)}`} />
            <div className="sizebox"></div>
            <figcaption>
              <h2>{item.title}</h2>
              <div className="left">
                <p>{`~ ${item.author}`}</p>
              </div>
              <p>{item.content}</p>
              <a href={item.url} target="_blank" className="read-more">Read More</a>
            </figcaption>
          </figure>
        ))}
      </div>
    </div >
  );
};

export default Layout;
