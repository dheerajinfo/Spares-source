import React from "react";
import { cn } from "../utils/cn";

function Split({ children, cols = 2, className = "" }) {
  const colClass = {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
    6: "lg:grid-cols-6",
  }[cols] || "lg:grid-cols-2";

  

  return (
    <div
      className={cn("flex flex-col w-full lg:grid",
        colClass,
        className
      )}
    >
      {children}
    </div>
  );
}

export default Split;
