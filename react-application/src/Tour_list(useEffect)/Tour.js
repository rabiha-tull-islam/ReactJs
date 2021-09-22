import React, { useState } from "react";
import Header from "./Header";
import Data from "./Data";
import TourList from "./TourList";

const Tour = () => {
  const [data, setdata] = useState(Data);
  const deletee = (id) => {
    console.log("delere");
    const filtered = Data.filter((item, i) => item.id != id);
    setdata(filtered);
  };
  return (
    <div>
      <Header />
      {Data.map((item, i) => (
        <TourList item={item} key={i} deletee={deletee} />
      ))}
    </div>
  );
};

export default Tour;
