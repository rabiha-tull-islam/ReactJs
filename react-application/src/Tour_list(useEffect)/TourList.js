import React, { useState } from "react";
import Data from "./Data";
const TourList = ({ item, i }) => {
  const [readMore, setreadMore] = useState(true);
  const contentData = Data.map((items, i) => items.content);
  const contentOnce = new Set(contentData);
  const arrayContent = [...contentOnce];
  console.log(arrayContent);
  const contentString = arrayContent.toString();
  const contentSlice = contentString.slice(0, 150);
  console.log(contentSlice);
  const setContent = readMore ? contentSlice : contentString;
  return (
    <div key={i} className="d-flex justify-content-center m-4 p-4">
      <div className="card" style={{ width: "27rem" }}>
        <img src={item.Image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Tour Place</h5>
          <p className="card-text text-justify">
            {setContent}
            {readMore ? "...." : ""}
            <button
              onClick={() => setreadMore(!readMore)}
              className="btn btn-outline-success"
            >
              {readMore ? "Read more" : "Read Less"}
            </button>
          </p>
          <a href="#" className="btn btn-primary">
            Not interested
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourList;
