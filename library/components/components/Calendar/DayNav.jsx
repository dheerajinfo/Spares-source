import React, { useState, useMemo } from "react";

function DayNav({
  className = "",
  year = 2025,
  month = 0, // 0 = January
  multiple = false, // if false → single selection
  onSelect = () => {}
}) {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const isLeapYear = useMemo(() => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }, [year]);

  const daysInMonths = useMemo(() => {
    return [
      31,
      isLeapYear ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31
    ];
  }, [isLeapYear]);

  // Store selections with full date context
  const [selectedDays, setSelectedDays] = useState([]);

  const daysInMonth = daysInMonths[month];

  const startDay = useMemo(() => {
    return new Date(year, month, 1).getDay();
  }, [year, month]);

  const calendarDays = useMemo(() => {
    const days = [];
    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }
    for (let d = 1; d <= daysInMonth; d++) {
      days.push(d);
    }
    return days;
  }, [startDay, daysInMonth]);

  const handleDayClick = (day) => {
    if (!day) return;

    // Create a unique key for this day in this month/year
    const dayKey = `${year}-${month}-${day}`;

    if (multiple) {
      setSelectedDays((prev) =>
        prev.includes(dayKey)
          ? prev.filter((d) => d !== dayKey)
          : [...prev, dayKey]
      );
    } else {
      setSelectedDays([dayKey]);
    }

    onSelect({ year, month, day });
  };

  const isSelected = (day) => {
    return selectedDays.includes(`${year}-${month}-${day}`);
  };

  return (
    <div
      className={`w-full rounded-b-4 text-sm ${className}`}
    >
      <div className="grid grid-cols-7 p-4 text-center font-medium border-b border-white/20">
        {weekdays.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 p-4 gap-1">
        {calendarDays.map((day, index) => (
          <button
            key={index}
            onClick={() => handleDayClick(day)}
            disabled={!day}
            className={`w-8 h-8 rounded-4 text-center transition-all duration-200 ${
              day
                ? isSelected(day)
                  ? "bg-white/20 text-white font-semibold"
                  : "hover:bg-white/20"
                : "opacity-0 cursor-default"
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DayNav;
