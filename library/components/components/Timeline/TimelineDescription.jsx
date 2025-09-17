import React from "react";

function TimelineDescription({ children, className = "" }) {
  return <p className={`text-xs text-gray-600 ${className}`}>{children}</p>;
}

export default TimelineDescription;
