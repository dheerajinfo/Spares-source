import React, { useState, useRef, useEffect } from 'react';
import Select from '../../library/components/Select/Select';
import SelectPanel from '../../library/components/Select/SelectPanel';
import SelectPlaceholder from '../../library/components/Select/SelectPlaceholder';
import SelectItem from '../../library/components/Select/SelectItem';

function SelectDemo() {
  const [openPanel, setOpenPanel] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpenPanel(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setOpenPanel(false);
  };

  return (
    <div ref={selectRef} className='relative'>
      <Select className="bg-black text-white w-48">
        <SelectPlaceholder
          className="text-white text-sm px-4 h-8"
          onClick={() => setOpenPanel((prev) => !prev)}
        >
          {selectedValue || 'Select'}
        </SelectPlaceholder>

        {openPanel && (
          <SelectPanel className="absolute bg-black px-4 py-6 flex flex-col gap-4 text-white w-48">
            {['Apple', 'Mango', 'Banana', 'Orange'].map((item) => (
              <SelectItem
                key={item}
                className={`text-sm h-8 flex items-start ${
                  selectedValue === item ? 'text-bold' : ''
                }`}
                onClick={() => handleSelect(item)}
              >
                {item}
              </SelectItem>
            ))}
          </SelectPanel>
        )}
      </Select>
    </div>
  );
}

export default SelectDemo;
