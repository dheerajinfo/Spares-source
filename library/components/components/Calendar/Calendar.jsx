import React, { useState } from 'react';
import MonthNav from './MonthNav';
import DayNav from './DayNav';

function Calendar({ className = '', multiple = false, onSelect }) {
  const [month, setMonth] = useState(0); 
  const [year, setYear] = useState(2025);

  return (
    <div className={`max-w-[288px] rounded-4 ${className}`}>
      <MonthNav
        onMonthSelect={(monthName) => setMonth(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].indexOf(monthName))}
        onYearChange={(newYear) => setYear(newYear)}
        defaultIndex={month}
        defaultYear={year}
      />
      <DayNav
        month={month}
        year={year}
        multiple={multiple}
        onSelect={onSelect}
      />
    </div>
  );
}

export default Calendar;
