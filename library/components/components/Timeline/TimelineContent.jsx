import React from "react";

function TimelineContent({ children, className = "" }) {
  return (
    <div className={`flex flex-col pb-8 ${className}`}>
      {children}
    </div>
  );
}

export default TimelineContent;
