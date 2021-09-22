import React, { useState } from "react";
import Data from "./Data";
const TourList = ({
  item,
  i,
  deletee,
  setContent,
  setreadMore,
  readMore,
  index,
}) => {
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
          <button className="btn btn-primary" onClick={() => deletee(index)}>
            Not interested!!
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourList;
