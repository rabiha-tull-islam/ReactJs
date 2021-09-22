import React from "react";
import Header from "./Header";
import Data from "./Data";
import TourList from "./TourList";

const Tour = () => {
  return (
    <div>
      <Header />
      {Data.map((item, i) => (
        <TourList item={item} key={i} />
      ))}
    </div>
  );
};

export default Tour;
