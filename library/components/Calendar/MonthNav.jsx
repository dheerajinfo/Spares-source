import React, { useState, useRef, useEffect } from "react";

function MonthNav({
  className = "",
  leftIcon,
  rightIcon,
  onMonthChange,
  onMonthSelect,
  onYearChange,
  defaultIndex = 0,
  defaultYear = 2025,
}) {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  
  const years = Array.from({ length: 2047 - 1947 + 1 }, (_, i) => 1947 + i);

  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const [selectedYear, setSelectedYear] = useState(defaultYear);
  const [openMonth, setOpenMonth] = useState(false);
  const [openYear, setOpenYear] = useState(false);

  const monthDropdownRef = useRef(null);
  const yearDropdownRef = useRef(null);
  const selectedYearRef = useRef(null);

  useEffect(() => {
    if (openYear && selectedYearRef.current && yearDropdownRef.current) {
      const offset =
        selectedYearRef.current.offsetTop -
        yearDropdownRef.current.clientHeight / 2 +
        selectedYearRef.current.clientHeight / 2;
      yearDropdownRef.current.scrollTop = offset;
    }
  }, [openYear]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        monthDropdownRef.current &&
        !monthDropdownRef.current.contains(event.target)
      ) {
        setOpenMonth(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        yearDropdownRef.current &&
        !yearDropdownRef.current.contains(event.target)
      ) {
        setOpenYear(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const ArrowIcon = ({ direction = "right", size = 9, stroke = "white" }) => (
    <svg
      width={size * 0.66}
      height={size}
      viewBox="0 0 6 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform:
          direction === "left"
            ? "rotate(180deg)"
            : direction === "down"
            ? "rotate(90deg)"
            : "none",
      }}
    >
      <path
        d="M1.5 7.5L4.5 4.5L1.5 1.5"
        stroke={stroke}
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );

const handlePrev = () => {
  let newIndex = selectedIndex - 1;
  let newYear = selectedYear;

  if (newIndex < 0) {
    newIndex = 11; // December
    newYear -= 1;
    setSelectedYear(newYear);          // ✅ Update local state
    onYearChange?.(newYear);           // ✅ Notify parent
  }

  setSelectedIndex(newIndex);
  onMonthSelect?.(months[newIndex]);
};

const handleNext = () => {
  let newIndex = selectedIndex + 1;
  let newYear = selectedYear;

  if (newIndex > 11) {
    newIndex = 0; // January
    newYear += 1;
    setSelectedYear(newYear);          // ✅ Update local state
    onYearChange?.(newYear);           // ✅ Notify parent
  }

  setSelectedIndex(newIndex);
  onMonthSelect?.(months[newIndex]);
};

  const handleMonthSelect = (index) => {
    setSelectedIndex(index);
    onMonthSelect?.(months[index]);
    setOpenMonth(false);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    onYearChange?.(year);
    setOpenYear(false);
  };

  return (
    <div
      className={`w-full rounded-t-md px-3 h-12 flex items-center justify-between gap-4 ${className}`}
    >
      <button
        className="w-8 h-8 flex items-center justify-center"
        onClick={handlePrev}
      >
        {leftIcon || <ArrowIcon direction="left" />}
      </button>

      <div className="flex flex-row items-center gap-5">
        
        <div className="relative" ref={monthDropdownRef}>
          <button
            onClick={() => setOpenMonth(!openMonth)}
            className="h-8 flex flex-row items-center gap-2 cursor-pointer border border-white/20 p-2 rounded-md"
          >
            <span className="text-xs">{months[selectedIndex]}</span>
            <ArrowIcon direction="down" />
          </button>
          {openMonth && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-fit bg-black border border-white/20 rounded p-2 mt-3">
              <div className="text-white h-32 overflow-y-auto noscrollbar flex flex-col gap-2 p-2 mt-1">
                {months.map((month, index) => (
                  <button
                    onClick={() => handleMonthSelect(index)}
                    key={index}
                    className="text-xs my-1"
                  >
                    {month}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="relative" ref={yearDropdownRef}>
          <button
            onClick={() => setOpenYear(!openYear)}
            className="flex flex-row items-center gap-2 cursor-pointer border border-white/20 p-2 rounded-md"
          >
            <span className="text-xs">{selectedYear}</span>
            <ArrowIcon direction="down" />
          </button>
          {openYear && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-fit bg-black border border-white/20 rounded p-2 mt-3">
              <div
                ref={yearDropdownRef}
                className="text-white p-2 rounded mt-1 h-32 overflow-y-auto noscrollbar flex flex-col gap-2"
              >
                {years.map((year) => (
                  <button
                    key={year}
                    ref={year === selectedYear ? selectedYearRef : null}
                    onClick={() => handleYearSelect(year)}
                    className={`text-xs my-1 ${
                      year === selectedYear
                        ? ""
                        : ""
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <button
        className="w-8 h-8 flex items-center justify-center"
        onClick={handleNext}
      >
        {rightIcon || <ArrowIcon direction="right" />}
      </button>
    </div>
  );
}

export default MonthNav;
