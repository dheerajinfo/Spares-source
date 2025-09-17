import React from "react";

function Stack({ children, className = "" }) {
  return (
    <div className={`flex flex-col ${className}`}>
      {children}
    </div>
  );
}

export default Stack;
