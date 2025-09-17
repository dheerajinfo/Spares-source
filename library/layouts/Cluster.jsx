import React from "react";

const Cluster = ({ children, className = ""}) => {
  return (
    <div className={`flex flex-row flex-wrap ${className}`}>
      {children}
    </div>
  );
};

export default Cluster;
