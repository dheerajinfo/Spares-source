import React, { useState, useRef, useEffect } from "react";
import TimePicker from "../../library/components/Timepicker/TimePicker";
import TimepickerLabel from "../../library/components/Timepicker/TimepickerLabel";
import TimepickerButton from "../../library/components/Timepicker/TimepickerButton";
import TimePanel from "../../library/components/Timepicker/TimePanel";

function TimePickerDemo() {
  const [openPanel, setOpenPanel] = useState(false);
  const [selectedTime, setSelectedTime] = useState({
    hour: null,
    minute: null,
    second: null,
  });

  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpenPanel(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleTimeSelect = (type, value) => {
    setSelectedTime((prev) => ({ ...prev, [type]: value }));
  };

  const handleDone = () => {
    setOpenPanel(false);
  };

  const displayTime = `${selectedTime.hour ?? "00"}:${selectedTime.minute ?? "00"}:${selectedTime.second ?? "00"}`;

  return (
    <div ref={selectRef} className="relative inline-block">
      <TimePicker>
        <TimepickerLabel className="text-sm font-normal tracking-wider">Book your appointment</TimepickerLabel>

        <TimepickerButton
          className="w-36 bg-black text-white text-xs"
          onClick={() => setOpenPanel((prev) => !prev)}
        >
          {displayTime}
        </TimepickerButton>

        {openPanel && (
          <div className="absolute left-0 top-full mt-2 z-10 w-36">
            <TimePanel
              onSelect={handleTimeSelect}
              onClose={handleDone}
              selected={selectedTime}
              className="bg-black"
            />
          </div>
        )}
      </TimePicker>
    </div>
  );
}

export default TimePickerDemo;
