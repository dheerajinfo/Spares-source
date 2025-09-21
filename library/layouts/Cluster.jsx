import React from "react";
import { cn } from "../utils/cn";

const Cluster = ({ children, className = ""}) => {
  return (
    <div className={cn("flex flex-row flex-wrap", className)}>
      {children}
    </div>
  );
};

export default Cluster;
