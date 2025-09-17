import React, { useState } from 'react';
import Tabs from '../../library/components/Tabs/Tabs';
import TabsNav from '../../library/components/Tabs/TabsNav';
import TabName from '../../library/components/Tabs/TabName';
import TabContent from '../../library/components/Tabs/TabContent';

function TabsDemo() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const tabBaseClasses = 'text-white text-base lg:text-nowrap flex flex-row items-center gap-3';
  const activeClasses = 'underline underline-offset-8';
  
  return (
    <Tabs className='flex lg:flex-col sm:flex-row overflow-x-auto noscrollbar gap-2 bg-black p-6 w-full'>
      <TabsNav className='flex flex-col w-fit lg:flex-row lg:items-center gap-12'>
        
        <TabName
          onClick={() => setSelectedTabIndex(0)}
          className={`${tabBaseClasses} ${selectedTabIndex === 0 ? activeClasses : ''}`}
        >
        <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 3H15C16.1046 3 17 3.89543 17 5V19C17 20.1046 16.1046 21 15 21H3C1.89543 21 1 20.1046 1 19V5C1 3.89543 1.89543 3 3 3H4.5" stroke="white" strokeLinecap="round"/>
          <rect x="6" y="1" width="6" height="3" rx="0.5" stroke="white"/>
          <path d="M5 13.5H7.5M5 16H6" stroke="white" strokeLinecap="round"/>
          <path d="M5 10L6 11L8.5 8" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
          Activities
        </TabName>
        <TabName
          onClick={() => setSelectedTabIndex(1)}
          className={`${tabBaseClasses} ${selectedTabIndex === 1 ? activeClasses : ''}`}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.77778 5V9V13M2.77778 5V2C2.77778 1.44772 3.22549 1 3.77778 1H16C16.5523 1 17 1.44772 17 2V16C17 16.5523 16.5523 17 16 17H3.77778C3.22549 17 2.77778 16.5523 2.77778 16V13M2.77778 5H1M2.77778 13H1" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="9.75" cy="7" r="1.5" stroke="white"/>
            <path d="M12.05 11.88V11.4C12.05 10.0745 10.9755 9 9.65 9V9C8.32452 9 7.25 10.0745 7.25 11.4V11.88" stroke="white" strokeLinecap="round"/>
          </svg>
          Contact Management
        </TabName>    
        <TabName
          onClick={() => setSelectedTabIndex(2)}
          className={`${tabBaseClasses} ${selectedTabIndex === 2 ? activeClasses : ''}`}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 1H2C1.44772 1 1 1.44772 1 2V3.8108C1 4.25738 1.14947 4.69111 1.42458 5.04289L6.57542 11.629C6.85053 11.9808 7 12.4145 7 12.8611V15.557C7 16.2552 7.69737 16.7385 8.35112 16.4933L10.3511 15.7433C10.7414 15.597 11 15.2238 11 14.807V12.8611C11 12.4145 11.1495 11.9808 11.4246 11.629L16.5754 5.04289C16.8505 4.69111 17 4.25738 17 3.8108V2C17 1.44772 16.5523 1 16 1Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Pipeline
        </TabName>
          <TabName
          onClick={() => setSelectedTabIndex(3)}
          className={`${tabBaseClasses} ${selectedTabIndex === 3 ? activeClasses : ''}`}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 2.5L5 1H13L13.5 2.5M1 4V17H17V4H1Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 6C1 6 4.03908 8.69719 7.06019 9.66194M17 6C17 6 13.8563 8.79006 10.7851 9.70981M7.06019 9.66194C7.71817 9.87206 8.3753 10 9 10C9.57573 10 10.179 9.89133 10.7851 9.70981M7.06019 9.66194V12.5H10.7851V9.70981" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Deals Closed
        </TabName>
        <TabName
          onClick={() => setSelectedTabIndex(4)}
          className={`${tabBaseClasses} ${selectedTabIndex === 4 ? activeClasses : ''}`}
        >
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 5.5V10V18C17 18.5523 16.5523 19 16 19H2C1.44772 19 1 18.5523 1 18V2C1 1.44772 1.44772 1 2 1H9H12.5509C12.8366 1 13.1086 1.12215 13.2983 1.33564L17 5.5ZM17 5.5C17 5.5 16.0416 6.83085 15 7.1875C14.2437 7.44644 13.4206 7.00893 13 6.0625C12.646 5.26606 12.5426 4.39914 12.5568 3.61143" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 7H5" stroke="white" strokeLinecap="round"/>
            <path d="M4 11H10.5" stroke="white" strokeLinecap="round"/>
            <path d="M4 15H6.5" stroke="white" strokeLinecap="round"/>
          </svg>
          Reports
        </TabName>
      </TabsNav>

      {selectedTabIndex === 0 && (
        <TabContent className='lg:py-6 py-0'>
          <h1 className='text-white text-base'>Manage your daily tasks and miss out nothing.</h1>
        </TabContent>
      )}
      {selectedTabIndex === 1 && (
        <TabContent className='lg:py-6 py-0'>
          <h1 className='text-white text-base'>Add MQL contacts to connect with them.</h1>
        </TabContent>
      )}
      {selectedTabIndex === 2 && (
        <TabContent className='lg:py-6 py-0'>
          <h1 className='text-white text-base'>Track the sales prospects across all stages.</h1>
        </TabContent>
      )}{selectedTabIndex === 3 && (
        <TabContent className='lg:py-6 py-0'>
          <h1 className='text-white text-base'>Show your results.</h1>
        </TabContent>
      )}
      {selectedTabIndex === 4 && (
        <TabContent className='lg:py-6 py-0'>
          <h1 className='text-white text-base'>Analyse what's working and what's not.</h1>
        </TabContent>
      )}
    </Tabs>
  );
}

export default TabsDemo;
