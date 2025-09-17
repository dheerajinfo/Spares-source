import React, { useState, useRef, useEffect } from "react";
import DatePicker from "../../library/components/Datepicker/DatePicker";
import DatepickerLabel from "../../library/components/Datepicker/DatepickerLabel";
import DatepickerButton from "../../library/components/Datepicker/DatepickerButton";
import CalendarDemo from "./CalendarDemo";

function DatePickerDemo() {
  const [openPanel, setOpenPanel] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
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

  return (
    <div ref={selectRef} className="relative inline-block">
      <DatePicker className="flex flex-col gap-1">
        <DatepickerLabel className="text-lg">Date of birth</DatepickerLabel>

        <DatepickerButton
          className="bg-black w-36 h-8 text-sm font-normal tracking-widest text-white"
          onClick={() => setOpenPanel((prev) => !prev)}
        >
          {selectedDate
            ? `${selectedDate.day} ${[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ][selectedDate.month]} ${selectedDate.year}`
            : "Select date"}
        </DatepickerButton>

        {openPanel && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-10">
            <CalendarDemo onSelectDate={setSelectedDate} />
          </div>
        )}
      </DatePicker>
    </div>
  );
}

export default DatePickerDemo;
