import React, { useState } from "react";
import Header from "./Header";
import Data from "./Data";
import TourList from "./TourList";

const Tour = () => {
  const [data, setdata] = useState(Data);
  const deletee = (index) => {
    console.log("delete");
    const filtered = Data.filter((item, i) => index != i);
    setdata(filtered);
  };
  const [readMore, setreadMore] = useState(true);
  const contentData = Data.map((items, i) => items.content);
  const contentOnce = new Set(contentData);
  //   console.log(contentOnce);
  const arrayContent = [...contentOnce];
  console.log(arrayContent);
  const contentString = arrayContent.toString();
  const contentSlice = contentString.slice(0, 150);
  //   console.log(contentSlice);
  const setContent = readMore ? contentSlice : contentString;
  return (
    <div>
      <Header />
      {Data.map((item, i) => (
        <TourList
          item={item}
          key={i}
          index={item.id}
          deletee={deletee}
          setreadMore={setreadMore}
          setContent={setContent}
          readMore={readMore}
        />
      ))}
    </div>
  );
};

export default Tour;
