import React from "react";

function TimelineSeparator({ children, className = "" }) {
  return (
    <div className={`flex flex-col items-center mr-4 ${className}`}>
      {children}
    </div>
  );
}

export default TimelineSeparator;
