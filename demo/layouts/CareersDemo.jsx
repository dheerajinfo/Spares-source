import React, { useState } from 'react';
import Stack from '../../library/layouts/Stack';
import Tabs from '../../library/components/Tabs/Tabs';
import TabsNav from '../../library/components/Tabs/TabsNav';
import TabName from '../../library/components/Tabs/TabName';
import TabContent from '../../library/components/Tabs/TabContent';

function CareersDemo() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  
  const tabBaseClasses = 'text-white text-base lg:text-nowrap flex flex-row items-center gap-3';
  const activeClasses = 'underline underline-offset-8';

  return (
    <Stack className='text-white lg:items-center gap-4 py-24'>
      <h3 className='text-3xl'>Check our latest opportunities</h3>
      <p className='text-base'>We are building technologies.</p>
      <Tabs className='flex flex-col lg:items-center gap-2 w-full mt-12'>
        <TabsNav className='w-full lg:justify-center gap-12'>
          <TabName
            onClick={() => setSelectedTabIndex(0)}
            className={`${tabBaseClasses} ${selectedTabIndex === 0 ? activeClasses : ''}`}
          >
            Tech
          </TabName>
          <TabName
            onClick={() => setSelectedTabIndex(1)}
            className={`${tabBaseClasses} ${selectedTabIndex === 1 ? activeClasses : ''}`}
          >
            Sales
          </TabName>
          <TabName
            onClick={() => setSelectedTabIndex(2)}
            className={`${tabBaseClasses} ${selectedTabIndex === 2 ? activeClasses : ''}`}
          >
            Associates
          </TabName>
        </TabsNav>
        {selectedTabIndex === 0 && (
          <TabContent className='flex items-center justify-center py-12'>
            <h1 className='text-white/80 text-base'>We are not hiring at the moment.</h1>
          </TabContent>
        )}
        {selectedTabIndex === 1 && (
          <TabContent className='flex items-center justify-center py-12'>
            <h1 className='text-white/80 text-base'>We are not hiring at the moment.</h1>
          </TabContent>
        )}
        {selectedTabIndex === 2 && (
          <TabContent className='flex items-center justify-center py-12'>
            <h1 className='text-white/80 text-base'>We are not hiring at the moment.</h1>
          </TabContent>
        )}
      </Tabs>
    </Stack>
  )
}

export default CareersDemo;
