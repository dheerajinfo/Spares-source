import React from "react";

function Timeline({ children, className = "" }) {
  return (
    <div className={`flex flex-col relative ${className}`}>
      {children}
    </div>
  );
}

export default Timeline;
