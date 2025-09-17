import React, { useState, useRef, useEffect } from "react";
import Contextmenu from "../../library/components/Contextmenu/Contextmenu";
import ContextmenuArea from "../../library/components/Contextmenu/ContextmenuArea";
import ContextmenuPanel from "../../library/components/Contextmenu/ContextmenuPanel";
import ContextmenuItem from "../../library/components/Contextmenu/ContextmenuItem";

function ContextmenuDemo() {
  const [openPanel, setOpenPanel] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const panelRef = useRef(null);

  const handleRightClick = (event) => {
  console.log("Right click detected"); 
  event.preventDefault();
  setPosition({ x: event.clientX, y: event.clientY });
  setOpenPanel(true);
};


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setOpenPanel(false);
      }
    };
    const handleEsc = (event) => {
      if (event.key === "Escape") setOpenPanel(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div>
      <Contextmenu>
        <ContextmenuArea
          onContextMenu={handleRightClick}
          className="bg-black w-56 lg:w-96 h-96 rounded text-white/60 flex items-center justify-center p-8"
        >
          Right click anywhere in this box
        </ContextmenuArea>

        {openPanel && (
          <div
            ref={panelRef}
            className="fixed top-0 left-0 w-screen h-screen z-50"
            onClick={() => setOpenPanel(false)}
            onContextMenu={(e) => e.preventDefault()}
          >
            <div
              style={{
                position: "absolute",
                top: `${position.y}px`,
                left: `${position.x}px`,
              }}
            >
              <ContextmenuPanel className="w-32 border gap-0 bg-black border-white/10">
                <ContextmenuItem className="text-white text-base font-normal tracking-wider">File</ContextmenuItem>
                <ContextmenuItem className="text-white text-sm font-normal tracking-wider">Open</ContextmenuItem>
                <ContextmenuItem className="text-white text-sm font-normal tracking-wider">Save</ContextmenuItem>
                <ContextmenuItem className="text-white text-sm font-normal tracking-wider">Edit</ContextmenuItem>
              </ContextmenuPanel>
            </div>
          </div>
        )}

      </Contextmenu>
    </div>
  );
}

export default ContextmenuDemo;
