import React from "react";

function Frame({ src, className = "", ratio = 1 }) {
  return (
    <img src={src}
      className={`bg-black flex items-center justify-center overflow-clip ${className}`}
      style={{ aspectRatio: ratio }}
    />
      
  );
}

export default Frame;
