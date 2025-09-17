import React from "react";

function TimelineDescription({ children, className = "" }) {
  return <p className={`text-xs ${className}`}>{children}</p>;
}

export default TimelineDescription;
