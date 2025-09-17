import React, { useState, useEffect, useRef } from 'react';
import PageHeader from '../../library/components/Pageheader/PageHeader';
import PageBackbutton from '../../library/components/Pageheader/PageBackbutton';
import PageTitle from '../../library/components/Pageheader/PageTitle';
import PageSubtitle from '../../library/components/Pageheader/PageSubtitle';
import PageActions from '../../library/components/Pageheader/PageActions';
import PageDescription from '../../library/components/Pageheader/PageDescription';
import PageMeta from '../../library/components/Pageheader/PageMeta';
import PageTag from '../../library/components/Pageheader/PageTag';
import PageTabs from '../../library/components/Pageheader/PageTabs/PageTabs';
import PagetabsNav from '../../library/components/Pageheader/PageTabs/PagetabsNav'
import PagetabName from '../../library/components/Pageheader/PageTabs/PagetabName';
import PagetabContent from '../../library/components/Pageheader/PageTabs/PagetabContent';
import Dropdown from '../../library/components/Dropdown/Dropdown';
import DropdownButton from '../../library/components/Dropdown/DropdownButton';
import DropdownPanel from '../../library/components/Dropdown/DropdownPanel';
import DropdownItem from '../../library/components/Dropdown/DropdownItem';
import Separator from '../../library/components/Separator';

function PageHeaderDemo() {
  const [openPanel, setOpenPanel] = useState(false);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenPanel(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  return (
    <PageHeader className='bg-black'>
    <div className='flex flex-row justify-between items-start'>    
    <div className='flex flex-col'>
        <PageTitle className='text-white'>
            <h1>Page Header</h1>
        </PageTitle>
        <PageSubtitle className='text-white mt-3'>Subtitle</PageSubtitle>
    </div>
    <PageActions className='flex flex-row items-center gap-1 lg:gap-3'>
        <PageBackbutton className='text-white bg-black p-0 h-8 border border-white/20 rounded-md w-fit opacity-80'>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.64645 10.6464C8.45118 10.8417 8.45118 11.1583 8.64645 11.3536L11.8284 14.5355C12.0237 14.7308 12.3403 14.7308 12.5355 14.5355C12.7308 14.3403 12.7308 14.0237 12.5355 13.8284L9.70711 11L12.5355 8.17157C12.7308 7.97631 12.7308 7.65973 12.5355 7.46447C12.3403 7.2692 12.0237 7.2692 11.8284 7.46447L8.64645 10.6464ZM9.625 11V10.5H9V11V11.5H9.625V11Z" fill="white"/>
            </svg>
        </PageBackbutton>
        <div ref={dropdownRef} className="relative">
            <Dropdown>
            <DropdownButton className='relative w-fit h-8 px-0 rounded-md border border-white/20' onClick={() => setOpenPanel(!openPanel)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7" cy="11" r="1" fill="white"/>
                        <circle cx="11" cy="11" r="1" fill="white"/>
                        <circle cx="15" cy="11" r="1" fill="white"/>
                    </svg>

            </DropdownButton>

            {openPanel && (
            <DropdownPanel className='text-white bg-black absolute top-0 left-full -translate-x-full mt-6 flex items-start justify-start border border-white/10'>
                <DropdownItem className='w-full pt-6 pb-2 px-6 flex flex-row items-center gap-2 rounded-md hover:bg-white/5'>
                    <svg width="9" height="14" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.33204 9.00001C8.54118 9.00001 10.332 7.20915 10.332 5C10.332 2.79086 8.54118 1 6.33204 1C4.12289 1 2.33203 2.79086 2.33203 5C2.33203 7.20915 4.12289 9.00001 6.33204 9.00001Z" stroke="white" strokeWidth="1px" />
                        <path d="M1 14.3333C1 11.3878 3.38782 9 6.33334 9C9.27886 9 11.6667 11.3878 11.6667 14.3333V15.4C11.6667 16.2837 10.9503 17 10.0667 17H2.6C1.71635 17 1 16.2837 1 15.4V14.3333Z" stroke="white" strokeWidth="1px"/>
                    </svg>
                    Profile
                </DropdownItem>
                <DropdownItem className='w-full pb-6 pt-2 px-6 flex flex-row items-center gap-2 rounded-md hover:bg-white/5'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.79315 2.28519L5.61398 1.81839L5.79315 2.28519ZM5.51874 2.39824L5.31702 1.94074L5.51874 2.39824ZM2.39824 5.51874L1.94074 5.31702L2.39824 5.51874ZM2.28533 10.2068L1.81863 10.3862L2.28533 10.2068ZM2.26976 12.1692L1.91621 12.5227L2.26976 12.1692ZM3.83088 13.7303L3.47733 14.0838L3.83088 13.7303ZM5.51903 13.6009L5.72071 13.1434L5.51903 13.6009ZM5.79277 13.7137L5.97196 13.2469L5.79277 13.7137ZM10.2072 13.7136L10.0277 13.2469L10.2072 13.7136ZM10.4798 13.6011L10.278 13.1436L10.4798 13.6011ZM13.6014 10.4799L13.1441 10.2776L13.6014 10.4799ZM13.7144 10.2067L14.1809 10.3866L13.7144 10.2067ZM13.7146 5.79324L14.1812 5.61362L13.7146 5.79324ZM13.6012 5.51889L13.1439 5.72106L13.6012 5.51889ZM13.7303 3.83088L14.0838 3.47733L13.7303 3.83088ZM12.1692 2.26976L12.5227 1.91621L12.1692 2.26976ZM10.4801 2.39807L10.2782 2.85551L10.4801 2.39807ZM10.2068 2.28533L10.0274 2.75203L10.2068 2.28533ZM10.2068 2.28533L10.0274 2.75203C10.1121 2.78458 10.1957 2.81908 10.2782 2.85551L10.4801 2.39807L10.682 1.94063C10.5845 1.89763 10.4859 1.85696 10.3862 1.81863L10.2068 2.28533ZM12.1692 2.26976L11.8156 2.62331L13.3767 4.18443L13.7303 3.83088L14.0838 3.47733L12.5227 1.91621L12.1692 2.26976ZM13.6012 5.51889L13.1439 5.72106C13.1805 5.80392 13.2152 5.88787 13.2479 5.97287L13.7146 5.79324L14.1812 5.61362C14.1426 5.5135 14.1017 5.41451 14.0585 5.31673L13.6012 5.51889ZM15 6.89724H14.5V9.10276H15H15.5V6.89724H15ZM13.7144 10.2067L13.2479 10.0268C13.2153 10.1115 13.1807 10.1951 13.1441 10.2776L13.6014 10.4799L14.0586 10.6823C14.1017 10.5849 14.1425 10.4863 14.1809 10.3866L13.7144 10.2067ZM13.73 12.1694L13.3764 11.8159L11.8159 13.3764L12.1694 13.73L12.523 14.0835L14.0835 12.523L13.73 12.1694ZM10.4798 13.6011L10.278 13.1436C10.1956 13.18 10.1122 13.2144 10.0277 13.2469L10.2072 13.7136L10.3866 14.1802C10.4861 14.142 10.5844 14.1014 10.6816 14.0586L10.4798 13.6011ZM9.10219 15V14.5H6.89781V15V15.5H9.10219V15ZM5.79277 13.7137L5.97196 13.2469C5.88712 13.2143 5.80335 13.1798 5.72071 13.1434L5.51903 13.6009L5.31735 14.0584C5.41495 14.1015 5.51373 14.1422 5.61359 14.1805L5.79277 13.7137ZM3.83088 13.7303L4.18443 13.3767L2.62331 11.8156L2.26976 12.1692L1.91621 12.5227L3.47733 14.0838L3.83088 13.7303ZM2.39807 10.4801L2.85551 10.2782C2.81908 10.1957 2.78458 10.1121 2.75203 10.0274L2.28533 10.2068L1.81863 10.3862C1.85696 10.4859 1.89763 10.5845 1.94063 10.682L2.39807 10.4801ZM1 9.10276H1.5V6.89724H1H0.5V9.10276H1ZM2.28519 5.79315L2.75198 5.97233C2.78463 5.88728 2.81922 5.80329 2.85575 5.72045L2.39824 5.51874L1.94074 5.31702C1.8976 5.41486 1.85682 5.51388 1.81839 5.61398L2.28519 5.79315ZM2.26945 3.83114L2.623 4.18469L4.18469 2.623L3.83114 2.26945L3.47759 1.91589L1.91589 3.47759L2.26945 3.83114ZM5.51874 2.39824L5.72045 2.85575C5.80329 2.81922 5.88728 2.78463 5.97233 2.75198L5.79315 2.28519L5.61398 1.81839C5.51388 1.85682 5.41486 1.8976 5.31702 1.94074L5.51874 2.39824ZM6.89724 1V1.5H9.10276V1V0.5H6.89724V1ZM9.10276 1V1.5C9.18408 1.5 9.25 1.56592 9.25 1.64724H9.75H10.25C10.25 1.01364 9.73636 0.5 9.10276 0.5V1ZM6.25 1.64724H6.75C6.75 1.56592 6.81592 1.5 6.89724 1.5V1V0.5C6.26364 0.5 5.75 1.01364 5.75 1.64724H6.25ZM5.79315 2.28519L5.97233 2.75198C6.41163 2.58336 6.75 2.16248 6.75 1.64724H6.25H5.75C5.75 1.70468 5.70931 1.7818 5.61398 1.81839L5.79315 2.28519ZM4.74503 2.26945L4.39148 2.623C4.75571 2.98723 5.29166 3.0448 5.72045 2.85575L5.51874 2.39824L5.31702 1.94074C5.22243 1.98244 5.13882 1.95613 5.09859 1.91589L4.74503 2.26945ZM3.83114 2.26945L4.18469 2.623C4.2418 2.5659 4.33438 2.5659 4.39148 2.623L4.74503 2.26945L5.09859 1.91589C4.65096 1.46827 3.92521 1.46827 3.47759 1.91589L3.83114 2.26945ZM2.26945 4.74503L2.623 4.39148C2.5659 4.33438 2.5659 4.2418 2.623 4.18469L2.26945 3.83114L1.91589 3.47759C1.46827 3.92521 1.46827 4.65096 1.91589 5.09859L2.26945 4.74503ZM2.39824 5.51874L2.85575 5.72045C3.0448 5.29166 2.98723 4.75571 2.623 4.39148L2.26945 4.74503L1.91589 5.09859C1.95613 5.13882 1.98244 5.22243 1.94074 5.31702L2.39824 5.51874ZM1.64724 6.25V6.75C2.16248 6.75 2.58336 6.41164 2.75198 5.97233L2.28519 5.79315L1.81839 5.61398C1.7818 5.70931 1.70468 5.75 1.64724 5.75V6.25ZM1 6.89724H1.5C1.5 6.81592 1.56592 6.75 1.64724 6.75V6.25V5.75C1.01364 5.75 0.5 6.26364 0.5 6.89724H1ZM1.64724 9.75V9.25C1.56592 9.25 1.5 9.18408 1.5 9.10276H1H0.5C0.5 9.73636 1.01364 10.25 1.64724 10.25V9.75ZM2.28533 10.2068L2.75203 10.0274C2.58326 9.58836 2.1625 9.25 1.64724 9.25V9.75V10.25C1.70466 10.25 1.78191 10.2907 1.81863 10.3862L2.28533 10.2068ZM2.26948 11.2544L2.62325 11.6077C2.98728 11.2432 3.0448 10.7072 2.85551 10.2782L2.39807 10.4801L1.94063 10.682C1.98242 10.7767 1.95616 10.8605 1.91571 10.901L2.26948 11.2544ZM2.26976 12.1692L2.62331 11.8156C2.56591 11.7582 2.56588 11.6652 2.62325 11.6077L2.26948 11.2544L1.91571 10.901C1.46822 11.3491 1.46845 12.075 1.91621 12.5227L2.26976 12.1692ZM4.74501 13.73L4.39124 13.3767C4.33416 13.4338 4.24155 13.4339 4.18443 13.3767L3.83088 13.7303L3.47733 14.0838C3.92514 14.5317 4.65125 14.5314 5.09878 14.0834L4.74501 13.73ZM5.51903 13.6009L5.72071 13.1434C5.29172 12.9543 4.75545 13.012 4.39124 13.3767L4.74501 13.73L5.09878 14.0834C5.139 14.0431 5.22266 14.0167 5.31735 14.0584L5.51903 13.6009ZM6.25 14.3522H6.75C6.75 13.8367 6.41148 13.4156 5.97196 13.2469L5.79277 13.7137L5.61359 14.1805C5.70916 14.2172 5.75 14.2945 5.75 14.3522H6.25ZM6.89781 15V14.5C6.81618 14.5 6.75 14.4338 6.75 14.3522H6.25H5.75C5.75 14.9861 6.26389 15.5 6.89781 15.5V15ZM9.75 14.3522H9.25C9.25 14.4338 9.18382 14.5 9.10219 14.5V15V15.5C9.73611 15.5 10.25 14.9861 10.25 14.3522H9.75ZM10.2072 13.7136L10.0277 13.2469C9.58852 13.4157 9.25 13.8367 9.25 14.3522H9.75H10.25C10.25 14.2945 10.2909 14.2171 10.3866 14.1802L10.2072 13.7136ZM11.2544 13.73L11.6079 13.3764C11.2435 13.012 10.7071 12.9543 10.278 13.1436L10.4798 13.6011L10.6816 14.0586C10.7764 14.0167 10.8604 14.043 10.9008 14.0835L11.2544 13.73ZM12.1694 13.73L11.8159 13.3764C11.7585 13.4338 11.6654 13.4338 11.6079 13.3764L11.2544 13.73L10.9008 14.0835C11.3488 14.5315 12.075 14.5315 12.523 14.0835L12.1694 13.73ZM13.73 11.2544L13.3764 11.6079C13.4338 11.6654 13.4338 11.7585 13.3764 11.8159L13.73 12.1694L14.0835 12.523C14.5315 12.075 14.5315 11.3488 14.0835 10.9008L13.73 11.2544ZM13.6014 10.4799L13.1441 10.2776C12.9542 10.707 13.012 11.2435 13.3764 11.6079L13.73 11.2544L14.0835 10.9008C14.043 10.8603 14.0169 10.7766 14.0586 10.6823L13.6014 10.4799ZM14.3528 9.75V9.25C13.8375 9.25 13.4169 9.58836 13.2479 10.0268L13.7144 10.2067L14.1809 10.3866C14.2179 10.2907 14.2954 10.25 14.3528 10.25V9.75ZM15 9.10276H14.5C14.5 9.18408 14.4341 9.25 14.3528 9.25V9.75V10.25C14.9864 10.25 15.5 9.73636 15.5 9.10276H15ZM14.3528 6.25V6.75C14.4341 6.75 14.5 6.81592 14.5 6.89724H15H15.5C15.5 6.26364 14.9864 5.75 14.3528 5.75V6.25ZM13.7146 5.79324L13.2479 5.97287C13.4168 6.41164 13.8375 6.75 14.3528 6.75V6.25V5.75C14.2954 5.75 14.218 5.7093 14.1812 5.61362L13.7146 5.79324ZM13.73 4.74501L13.3767 4.39124C13.012 4.75543 12.9542 5.29187 13.1439 5.72106L13.6012 5.51889L14.0585 5.31673C14.0168 5.22249 14.0431 5.13902 14.0834 5.09878L13.73 4.74501ZM13.7303 3.83088L13.3767 4.18443C13.4339 4.24155 13.4338 4.33416 13.3767 4.39124L13.73 4.74501L14.0834 5.09878C14.5314 4.65125 14.5317 3.92514 14.0838 3.47733L13.7303 3.83088ZM11.2544 2.26948L11.6077 2.62325C11.6652 2.56588 11.7582 2.56591 11.8156 2.62331L12.1692 2.26976L12.5227 1.91621C12.075 1.46845 11.3491 1.46822 10.901 1.91571L11.2544 2.26948ZM10.4801 2.39807L10.2782 2.85551C10.7072 3.0448 11.2432 2.98728 11.6077 2.62325L11.2544 2.26948L10.901 1.91571C10.8605 1.95616 10.7767 1.98242 10.682 1.94063L10.4801 2.39807ZM10.2068 2.28533L10.3862 1.81863C10.2907 1.78191 10.25 1.70466 10.25 1.64724H9.75H9.25C9.25 2.1625 9.58836 2.58326 10.0274 2.75203L10.2068 2.28533Z" fill="white"/>
                        <circle cx="8" cy="8" r="2.625" stroke="white"/>
                    </svg>        
                    Settings
                </DropdownItem>
            </DropdownPanel>
            )}
        </Dropdown>
        </div>    

    </PageActions>
    </div>
    <PageDescription className='text-white text-tiny font-normal tracking-wider my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab blanditiis sunt nam, libero ipsam odit expedita doloribus necessitatibus excepturi, perferendis neque ducimus. Iste nobis fugiat accusamus ipsa ipsum fugit aut.</PageDescription>
    <PageMeta className='gap-2 flex-wrap mb-12'>
        <PageTag className='text-white border border-white/10'>Code</PageTag>
        <PageTag className='text-white border border-white/10'>Component</PageTag>
        <PageTag className='text-white border border-white/10'>Page</PageTag>
    </PageMeta>
    <PageTabs>
        <PagetabsNav className='flex flex-row items-center gap-8 lg:gap-12 overflow-x-auto noscrollbar'>
        <PagetabName onClick={() => setSelectedTabIndex(0)} className={`text-white flex flex-row items-center gap-3 focus:underline focus:underline-offset-8 ${selectedTabIndex === 0 ? 'underline underline-offset-8' : ''}`}>                    
            <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 10.2583L3.8 5.80782L1.23253 1M8 11H3.8" stroke="white" strokeLinecap="round"/>
            </svg>
            Commits
        </PagetabName>
        <PagetabName onClick={() => setSelectedTabIndex(1)} className={`text-white flex flex-row items-center gap-3 focus:underline focus:underline-offset-8 ${selectedTabIndex === 1 ? 'underline underline-offset-8' : ''}`}>                    
            <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4C12 5.65685 10.6569 7 9 7C7.34315 7 6 5.65685 6 4M12 4C12 2.34315 10.6569 1 9 1C7.34315 1 6 2.34315 6 4M12 4H17M6 4H1" stroke="white" strokeLinecap="round"/>
            </svg>
            Checks
        </PagetabName>
        </PagetabsNav>
        <Separator className='border-white/10 mt-1' />
    </PageTabs>
    {selectedTabIndex === 0 && (
    <PagetabContent className='mt-6 bg-white/5 rounded-md p-3'>
        <h1 className='text-white text-xs'>This is the commit content.</h1>
    </PagetabContent> )}
    {selectedTabIndex === 1 && (
    <PagetabContent className='mt-6 bg-white/5 rounded-md p-3'>
        <h1 className='text-white text-xs'>Check your code snippet.</h1>
    </PagetabContent> )}
    </PageHeader>
  )
}

export default PageHeaderDemo;
