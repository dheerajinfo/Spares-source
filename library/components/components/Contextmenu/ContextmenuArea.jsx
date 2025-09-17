import React from "react";

function ContextmenuArea({ children, className = "", onContextMenu }) {
  return (
    <div
      onContextMenu={onContextMenu}
      className={`${className} relative`}
    >
      {children}
    </div>
  );
}

export default ContextmenuArea;
