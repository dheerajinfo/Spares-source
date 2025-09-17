import React from 'react';
import Sectionmessage from '../../library/components/Sectionmessage/Sectionmessage';
import SectionmessageIcon from '../../library/components/Sectionmessage/SectionmessageIcon';
import SectionmessageTitle from '../../library/components/Sectionmessage/SectionmessageTitle';
import SectionmessageDescription from '../../library/components/Sectionmessage/SectionmessageDescription';
import SectionmessageActions from '../../library/components/Sectionmessage/SectionmessageActions';
import SectionmessageButton from '../../library/components/Sectionmessage/SectionmessageButton';

function SectionMessageDemo() {
  return (
    <Sectionmessage className='bg-black p-6'>
      <div className='flex flex-row items-start flex-wrap gap-6'>
        <SectionmessageIcon className='pt-2'>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="10" stroke="white"/>
            <path d="M4 4L18 18" stroke="white"/>
          </svg>
        </SectionmessageIcon>
        <div className='flex flex-col gap-3'>
          <SectionmessageTitle className='text-white'>Access Restricted</SectionmessageTitle>
          <SectionmessageDescription className='text-white'>You do not have access to this section.</SectionmessageDescription>
          <SectionmessageActions className='mt-1 gap-3 flex-wrap'>
            <SectionmessageButton className='text-white'>Free trial</SectionmessageButton>
            <SectionmessageButton className='text-white'>Become a member</SectionmessageButton>
          </SectionmessageActions>
        </div>
      </div>  
    </Sectionmessage>
  )
}

export default SectionMessageDemo;
