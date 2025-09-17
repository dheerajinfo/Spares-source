import React, { useState } from "react";
import Backdrop from "../../library/components/Backdrop";

function BackdropDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="bg-black text-white text-sm h-8 px-5 rounded-4"
        onClick={() => setOpen(true)}
      >
        Backdrop
      </button>

      {open && (
        <div onClick={() => setOpen(false)}>
          <Backdrop />
        </div>
      )}
    </div>
  );
}

export default BackdropDemo;
