import React from "react";

function TimelineMeta({ children, className = "" }) {
  return <span className={`text-sm ${className}`}>{children}</span>;
}

export default TimelineMeta;
