import React, { useEffect, useRef, useState } from 'react';
import Popup from '../../library/components/Popup/Popup';
import PopupButton from '../../library/components/Popup/PopupButton';
import PopupContent from '../../library/components/Popup/PopupContent';

function PopupDemo() {

    const [openPopup, setOpenPopup] = useState(false);
        const popupRef = useRef(null);
        useEffect(() => {
        function handleClickOutside(e) {
          if (popupRef.current && !popupRef.current.contains(e.target)) {
            setOpenPopup(false);
          }
        }
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }, []);

  return (
    <div ref={popupRef}>
      <Popup>
        <PopupButton className='bg-black text-white' onClick={() => setOpenPopup(!openPopup)}>Popup</PopupButton>
        {openPopup && (
        <PopupContent className='absolute bottom-full left-0 mb-1 text-white bg-black rounded-4 w-fit flex flex-col gap-4 p-6'>
          <h1 className='text-xl'>Card title</h1>
          <p className='text-tiny w-32 lg:w-40'>Lorem ipsum dolor sit amet consectetur. </p>
        </PopupContent>
        )}
      </Popup>
    </div>
  )
}

export default PopupDemo;
