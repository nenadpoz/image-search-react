import "./ImageList.css";

import Image from "./Image";
import React from "react";

const ImageList = ({ list }) => {
  return (
    <div className="image-list">
      {list.map(el => (
        <Image key={el.id} src={el.urls.regular} />
      ))}
    </div>
  );
};

export default ImageList;
