import React, { useState } from 'react';
import Showmore from '../../library/components/Showmore/Showmore';
import ShowmorePreview from '../../library/components/Showmore/ShowmorePreview';
import ShowmoreDetails from '../../library/components/Showmore/ShowmoreDetails';
import ShowmoreButton from '../../library/components/Showmore/ShowmoreButton';

function ShowmoreDemo() {
    const[openDetails, setOpenDetails] = useState(false);
    
  return (
    <Showmore className='p-4 bg-black flex flex-row flex-wrap lg:flex-row lg:items-center gap-3'>
      <ShowmorePreview className='text-white'>
        This is the preview text
      </ShowmorePreview>
      <ShowmoreButton className='text-white underline underline-offset-4 ' onClick={() => setOpenDetails(!openDetails)}>
        Read more
      </ShowmoreButton>
      {openDetails && (
      <ShowmoreDetails className='text-white'>
        When you click show more button, these details appear.
      </ShowmoreDetails>
      )}
    </Showmore>
  )
}

export default ShowmoreDemo;
