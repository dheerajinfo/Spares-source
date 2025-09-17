import React from "react";

function TimelineContent({ children, className = "" }) {
  return (
    <div className={`flex flex-col ${className}`}>
      {children}
    </div>
  );
}

export default TimelineContent;
