import React from "react";

function TimelineMeta({ children, className = "" }) {
  return <span className={`text-[10px] text-gray-400 ${className}`}>{children}</span>;
}

export default TimelineMeta;
