import React from "react";

function TimelineItem({ children, className = "" }) {
  return (
    <div className={`flex items-start relative ${className}`}>
      {children}
    </div>
  );
}

export default TimelineItem;
