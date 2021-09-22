import React, { useState } from "react";

const TourList = ({ item, i }) => {
  const [readMore, setreadMore] = useState(false);
  const content = item.content;
  console.log(content);
  return (
    <div key={i} className="d-flex justify-content-center m-4 p-4">
      <div className="card" style={{ width: "27rem" }}>
        <img src={item.Image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Tour Place</h5>
          <p className="card-text text-justify">{item.content}</p>
          <a href="#" className="btn btn-primary">
            Not interested
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourList;
