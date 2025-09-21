import React, { useEffect, useRef } from "react";
import { cn } from "../../utils/cn";

function TimePanel({ className = "", onSelect, onClose, selected }) {
  const panelRef = useRef(null);

  const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"));
  const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"));
  const seconds = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"));

  useEffect(() => {
    function handleClickOutside(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        onClose?.();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={panelRef}
      className={cn("p-6 rounded-4 flex flex-col gap-4", className)}>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-2 w-6 max-h-40 overflow-y-auto overflow-x-hidden noscrollbar">
          {hours.map((h) => (
            <span
              key={h}
              className={`text-white text-sm cursor-pointer p-1 rounded ${
                selected.hour === h ? "bg-white/20" : "hover:bg-white/20"
              }`}
              onClick={() => onSelect("hour", h)}
            >
              {h}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-2 w-6 max-h-40 overflow-y-auto overflow-x-hidden noscrollbar">
          {minutes.map((m) => (
            <span
              key={m}
              className={`text-white text-sm cursor-pointer p-1 rounded ${
                selected.minute === m ? "bg-white/20" : "hover:bg-white/20"
              }`}
              onClick={() => onSelect("minute", m)}
            >
              {m}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-2 w-6 max-h-40 overflow-y-auto overflow-x-hidden noscrollbar">
          {seconds.map((s) => (
            <span
              key={s}
              className={`text-white text-sm cursor-pointer p-1 rounded ${
                selected.second === s ? "bg-white/20" : "hover:bg-white/20"
              }`}
              onClick={() => onSelect("second", s)}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <button
        className="mt-2 px-4 py-2 bg-white/10 text-white rounded text-xs font-medium hover:opacity-80"
        onClick={onClose}
      >
        Done
      </button>
    </div>
  );
}

export default TimePanel;
