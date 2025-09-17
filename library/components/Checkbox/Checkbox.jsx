import React from "react";

function Checkbox({ children, className = "" }) {
  return ( 
    <div className={`${className}`}>
      {children}
    </div>
  )
}

export default Checkbox;
