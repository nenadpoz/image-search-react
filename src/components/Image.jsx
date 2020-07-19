import React, { useEffect, useState } from "react";

const Image = ({ src }) => {
  const imageRef = React.createRef();
  const [imageSpans, setImageSpans] = useState(0);
  const onLoadEvent = () => {
    setImageSpans(Math.ceil(imageRef.current.height / 10 + 1));
  };

  return (
    <div style={{ "grid-row-end": `span ${imageSpans}` }}>
      <img ref={imageRef} src={src} alt="" onLoad={onLoadEvent} />
    </div>
  );
};

export default Image;
