import React from 'react';
import Calendar from '../../library/components/Calendar/Calendar';

function CalendarDemo({onSelectDate}) {
  return (
    <div>
      <Calendar className='bg-black text-white border-none'
      onSelect={onSelectDate}/>
    </div>
  )
}

export default CalendarDemo;
