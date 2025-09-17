import React from "react";

function TimelineTitle({ children, className = "" }) {
  return <h3 className={`font-semibold text-sm mb-1 ${className}`}>{children}</h3>;
}

export default TimelineTitle;
