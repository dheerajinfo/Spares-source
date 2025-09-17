import React, { useState } from 'react';
import Sidebar from '../../library/components/Sidebar/Sidebar';
import SidebarHeader from '../../library/components/Sidebar/SidebarHeader';
import SidebarContent from '../../library/components/Sidebar/SidebarContent';
import SidebarGroup from '../../library/components/Sidebar/SidebarGroup';
import SidebargroupHeader from '../../library/components/Sidebar/SidebargroupHeader';
import SidebarLink from '../../library/components/Sidebar/SidebarLink';
import SidebarFooter from '../../library/components/Sidebar/SidebarFooter';
import SidebarUser from '../../library/components/Sidebar/SidebarUser';
import SidebarAvatar from '../../library/components/Sidebar/SidebarAvatar';
import CollapsedSidebar from '../../library/components/Sidebar/CollapsedSidebar';
import CollapsedsidebarHeader from '../../library/components/Sidebar/CollapsedsidebarHeader';
import Sidebaropen from '../../library/components/Sidebar/Sidebaropen';
import CollapsedsidebarContent from '../../library/components/Sidebar/CollapsedsidebarContent';
import CollapsedsidebarFooter from '../../library/components/Sidebar/CollapsedsidebarFooter';
import CollapsedsidebarfooterOptions from '../../library/components/Sidebar/CollapsedsidebarfooterOptions';
import CollapsedsidebarIconbutton from '../../library/components/Sidebar/CollapsedsidebarIconbutton';
import SidebarfooterOptions from '../../library/components/Sidebar/SidebarfooterOptions';
import Separator from '../../library/components/Separator';

function SidebarDemoTwo() {
      const [isCollapsed, setIsCollapsed] = useState(false);
      const handleClose = () => setIsCollapsed(true);
      const handleOpen = () => setIsCollapsed(false);
  return (
    <div className=''>
    {!isCollapsed && (  
    <Sidebar className='bg-black border-r border-white/10 noscrollbar'>
      <SidebarHeader className='w-full flex flex-row items-start justify-between'>
        <div className='flex flex-col gap-0'>
          <h3 className='text-white text-base font-normal tracking-wider'>Logo</h3>
          <p className='text-white text-xs font-normal tracking-wider'>Subtitle</p>
        </div>
        <Sidebaropen
        icon={
        <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 1L1 4.5L4.5 8" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        }
        size={14} 
        className='opacity-100'
        onClick={handleClose} />
      </SidebarHeader>
      <SidebarContent className='text-white'>
        <SidebarGroup className='pt-6 mb-1'>
          <SidebarLink>
            Dashboard
          </SidebarLink>
        </SidebarGroup>
        <SidebarGroup className='pt-6 mb-1'>
          <SidebargroupHeader>
            LEARN
          </SidebargroupHeader>
          <SidebarLink>
            Courses
          </SidebarLink>
          <SidebarLink>
            Tracks
          </SidebarLink>
          <SidebarLink>
            Workshops
          </SidebarLink>
        </SidebarGroup>
        <SidebarGroup className='pt-6 mb-1'>
          <SidebargroupHeader>
            APPLY
          </SidebargroupHeader>
          <SidebarLink>
            Practice
          </SidebarLink>
           <SidebarLink>
            Projects
          </SidebarLink> 
        </SidebarGroup>  
        <SidebarGroup>
          <SidebargroupHeader className='pt-6 mb-1'>
            RESOURCES
          </SidebargroupHeader>
          <SidebarLink>
            Library
          </SidebarLink>
        </SidebarGroup>
        <SidebarGroup className='pt-6 mb-1'>
          <SidebargroupHeader>
            INTERVIEW HELP
          </SidebargroupHeader>
          <SidebarLink>
            Questions
          </SidebarLink>
          <SidebarLink>
            Guides
          </SidebarLink>
        </SidebarGroup>  
      </SidebarContent>
      <SidebarFooter>
        <SidebarUser className='text-white' username='Example' usercontact='user@example.com'>
          <SidebarAvatar className='h-12 w-12' />
        </SidebarUser>
        <SidebarfooterOptions className='bg-surface rounded-8 py-3 ml-6'>
          <button className='w-full h-10 px-6 text-nowrap text-white bg-surface flex items-center gap-3 text-sm font-medium tracking-wide hover:bg-white hover:bg-opacity-10 rounded-4'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.67232 3.16654C6.10874 2.73013 6.72219 2.51965 7.33461 2.5962L10.4773 2.98904C11.3852 3.10252 12.1003 3.81764 12.2138 4.72552L12.6066 7.86822C12.6832 8.48064 12.4727 9.09409 12.0363 9.5305L7.77821 13.7886C6.99716 14.5696 5.73083 14.5696 4.94978 13.7886L1.41425 10.253C0.633197 9.472 0.633198 8.20567 1.41425 7.42462L5.67232 3.16654Z" stroke="white"/>
              <path d="M10.6995 5.14636C10.2843 4.77989 10.0225 4.24371 10.0225 3.64636C10.0225 2.54179 10.9179 1.64636 12.0225 1.64636C13.127 1.64636 14.0225 2.54179 14.0225 3.64636C14.0225 4.52097 13.4611 5.26445 12.679 5.53612" stroke="white" strokeLinecap="round"/>
            </svg>
            Upgrade your plan
        </button>
        <button className='w-full h-10 px-6 text-white bg-surface flex items-center gap-3 text-sm font-medium tracking-wide hover:bg-white hover:bg-opacity-10 rounded-md'>
            <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.5625" cy="4.75" r="3.75" stroke="white"/>
                <path d="M1 13.5C1 10.7386 3.23858 8.5 6 8.5H9.125C11.8864 8.5 14.125 10.7386 14.125 13.5V13.5C14.125 14.8807 13.0057 16 11.625 16H3.5C2.11929 16 1 14.8807 1 13.5V13.5Z" stroke="white"/>
            </svg>
            Account
        </button>
        <button className='w-full h-10 px-6 text-white bg-surface flex items-center gap-3 text-sm font-medium tracking-wide hover:bg-white hover:bg-opacity-10 rounded-md'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.67226 3.16654C6.10868 2.73013 6.72213 2.51965 7.33455 2.5962L10.4772 2.98904C11.3851 3.10252 12.1002 3.81764 12.2137 4.72552L12.6066 7.86822C12.6831 8.48064 12.4726 9.09409 12.0362 9.5305L7.77815 13.7886C6.9971 14.5696 5.73077 14.5696 4.94972 13.7886L1.41418 10.253C0.633136 9.472 0.633137 8.20567 1.41419 7.42462L5.67226 3.16654Z" stroke="white"/>
                <path d="M10.6995 5.14636C10.2843 4.77989 10.0224 4.24371 10.0224 3.64636C10.0224 2.54179 10.9178 1.64636 12.0224 1.64636C13.127 1.64636 14.0224 2.54179 14.0224 3.64636C14.0224 4.52097 13.461 5.26445 12.6789 5.53612" stroke="white" strokeLinecap="round"/>
            </svg>
            Billing
        </button>
        <button className='w-full h-10 px-6 text-white bg-surface flex items-center gap-3 text-sm font-medium tracking-wide hover:bg-white hover:bg-opacity-10 rounded-md'>
            <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6667 7.27451C11.6156 6.87825 11.5812 6.4446 11.5594 5.99624C11.4283 3.30631 9.35979 1 6.66667 1C3.97354 1 1.905 3.30631 1.77395 5.99624C1.75211 6.4446 1.7177 6.87825 1.66667 7.27451C1.50592 8.52267 1.09222 10.083 0.717233 11.3354C0.366019 12.5084 1.08326 13.7545 2.29461 13.9331C3.64241 14.1318 5.33682 14.3333 6.66667 14.3333C7.99651 14.3333 9.69093 14.1318 11.0387 13.9331C12.2501 13.7545 12.9673 12.5084 12.6161 11.3354C12.2411 10.083 11.8274 8.52267 11.6667 7.27451Z" stroke="white"/>
                <path d="M8.33333 15.1667C7.8487 15.6932 7.26694 16 6.64133 16C6.03738 16 5.47429 15.7141 5 15.2205" stroke="white" strokeLinecap="round"/>
            </svg>
            Notifications
        </button>        
        <Separator className='my-1 border border-white/10'/>
        <button className='w-full h-10 px-6 text-white bg-surface flex items-center gap-3 text-sm font-medium tracking-wide hover:bg-white hover:bg-opacity-10 rounded-md'>
            <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.10156 3.8125C2.69655 4.75058 1 7.02259 1 9.67642C1 13.1688 3.93813 16 7.5625 16C11.1869 16 14.125 13.1688 14.125 9.67642C14.125 7.02259 12.4285 4.75058 10.0234 3.8125" stroke="white" strokeLinecap="round"/>
                <path d="M7.5625 7.09375V1" stroke="white" strokeLinecap="round"/>
            </svg>
            Logout
        </button>
        </SidebarfooterOptions>
      </SidebarFooter>
    </Sidebar>
    )}
    {isCollapsed && (
    <CollapsedSidebar className='bg-black border-r border-white/10'>
        <CollapsedsidebarHeader className='flex flex-row gap-3'>
          <p className='text-white mb-1'>Lo</p>
          <Sidebaropen 
          icon={
          <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8L4.5 4.5L1 1" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          } 
          size={12} 
          className='opacity-100' 
          onClick={handleOpen} />
        </CollapsedsidebarHeader>
        <CollapsedsidebarContent className='pt-6 pl-1'>
          <SidebarGroup className='flex flex-col gap-4'>
            <CollapsedsidebarIconbutton className='bg-surface' tooltipText='Dashboard'>
              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7.5L8.82902 1.84571C9.52805 1.34085 10.472 1.34085 11.171 1.84571L19 7.5M1.96583 6.80246L2.5 12L2.8199 15.199C2.92214 16.2214 3.78247 17 4.80998 17H15.191C16.2181 17 17.0782 16.222 17.181 15.2001L18.0259 6.79648" stroke="white" strokeLinecap="round"/>
                <path d="M13 11C13 12.4728 11.6569 13 10 13C8.34315 13 7 12.4728 7 11" stroke="white" strokeLinecap="round"/>
              </svg>
            </CollapsedsidebarIconbutton>
            <CollapsedsidebarIconbutton className='bg-surface' tooltipText='Courses'>
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 19H15C16.1046 19 17 18.1046 17 17V11.5V7.75V6.0004C17 4.89598 16.1048 4.00062 15.0004 4.0004L13 4H9H3C1.89543 4 1 4.89543 1 6V17C1 18.1046 1.89543 19 3 19Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 15H9M5 11.875H6.93752" stroke="white" strokeLinecap="round"/>
                <path d="M12 3.5V3.5C12 1.79875 10.3096 0.614709 8.71073 1.1961L3.63303 3.04254C2.05227 3.61736 1 5.11968 1 6.80171V7" stroke="white" strokeLinecap="round"/>
              </svg>
            </CollapsedsidebarIconbutton>
            <CollapsedsidebarIconbutton className='bg-surface' tooltipText='Tracks'>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1V17M17 6V12M1 6V12M5 4V14M13 4V14" stroke="white" strokeLinecap="round"/>
              </svg>
            </CollapsedsidebarIconbutton>
            <CollapsedsidebarIconbutton className='bg-surface' tooltipText='Workshops'>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="11" r="2" stroke="white"/>
                <path d="M5.5 15.6667C5.5 14.1939 6.69391 13 8.16667 13H9.83333C11.3061 13 12.5 14.1939 12.5 15.6667V15.6667C12.5 16.403 11.903 17 11.1667 17H6.83333C6.09695 17 5.5 16.403 5.5 15.6667V15.6667Z" stroke="white"/>
                <path d="M4 17H3C1.89543 17 1 16.1046 1 15V14.5V3C1 1.89543 1.89543 1 3 1H15C16.1046 1 17 1.89543 17 3V15V15C17 16.1046 16.1046 17 15 17H14" stroke="white" strokeLinecap="round"/>
              </svg>
            </CollapsedsidebarIconbutton>
            <CollapsedsidebarIconbutton className='bg-surface' tooltipText='Practice'>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 17H9.5M1 15V17H3L17 3L15 1L8 8L5 11L3 13C2.21895 13.781 1 15 1 15Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </CollapsedsidebarIconbutton>
            <CollapsedsidebarIconbutton className='bg-surface' tooltipText='Projects'>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 13H3C1.89543 13 1 12.1046 1 11V3C1 1.89543 1.89543 1 3 1H15C16.1046 1 17 1.89543 17 3V11C17 12.1046 16.1046 13 15 13H14" stroke="white" strokeLinecap="round"/>
                <path d="M8.5 13L8 17M8 17H7M8 17H9" stroke="white" strokeLinecap="round"/>
                <mask id="path-3-inside-1_2071_3367" fill="white">
                  <path d="M10.7581 11.2094C10.8021 10.9303 11.2044 10.9302 11.2483 11.2094C11.2816 11.4219 11.5507 11.494 11.6858 11.3266C11.8634 11.107 12.2118 11.3081 12.1106 11.5717C12.0332 11.7724 12.2302 11.9704 12.4309 11.893C12.6948 11.7912 12.8958 12.1391 12.676 12.3168C12.5086 12.4519 12.5807 12.722 12.7932 12.7553C13.0727 12.7991 13.0727 13.2018 12.7932 13.2455C12.5807 13.2789 12.5086 13.548 12.676 13.683C12.896 13.8607 12.6947 14.2094 12.4309 14.1078C12.2302 14.0304 12.0332 14.2274 12.1106 14.4282C12.2122 14.692 11.8634 14.8932 11.6858 14.6733C11.5507 14.5059 11.2816 14.578 11.2483 14.7905C11.2045 15.0699 10.8019 15.0699 10.7581 14.7905C10.7248 14.5779 10.4547 14.5059 10.3196 14.6733C10.1419 14.8931 9.79396 14.692 9.89575 14.4282C9.97314 14.2275 9.77516 14.0304 9.57446 14.1078C9.31085 14.2091 9.10973 13.8607 9.32935 13.683C9.49676 13.5479 9.4247 13.2788 9.21216 13.2455C8.93298 13.2016 8.93305 12.7993 9.21216 12.7553C9.4247 12.722 9.49676 12.4519 9.32935 12.3168C9.10988 12.1391 9.31079 11.7915 9.57446 11.893C9.77517 11.9704 9.97319 11.7724 9.89575 11.5717C9.79424 11.308 10.1419 11.1071 10.3196 11.3266C10.4547 11.494 10.7248 11.4219 10.7581 11.2094ZM11.0032 12.1616C10.54 12.1616 10.1643 12.5373 10.1643 13.0004C10.1645 13.4634 10.5402 13.8383 11.0032 13.8383C11.466 13.8381 11.8409 13.4632 11.8411 13.0004C11.8411 12.5374 11.4661 12.1618 11.0032 12.1616Z"/>
                </mask>
                <path d="M10.7581 11.2094C10.8021 10.9303 11.2044 10.9302 11.2483 11.2094C11.2816 11.4219 11.5507 11.494 11.6858 11.3266C11.8634 11.107 12.2118 11.3081 12.1106 11.5717C12.0332 11.7724 12.2302 11.9704 12.4309 11.893C12.6948 11.7912 12.8958 12.1391 12.676 12.3168C12.5086 12.4519 12.5807 12.722 12.7932 12.7553C13.0727 12.7991 13.0727 13.2018 12.7932 13.2455C12.5807 13.2789 12.5086 13.548 12.676 13.683C12.896 13.8607 12.6947 14.2094 12.4309 14.1078C12.2302 14.0304 12.0332 14.2274 12.1106 14.4282C12.2122 14.692 11.8634 14.8932 11.6858 14.6733C11.5507 14.5059 11.2816 14.578 11.2483 14.7905C11.2045 15.0699 10.8019 15.0699 10.7581 14.7905C10.7248 14.5779 10.4547 14.5059 10.3196 14.6733C10.1419 14.8931 9.79396 14.692 9.89575 14.4282C9.97314 14.2275 9.77516 14.0304 9.57446 14.1078C9.31085 14.2091 9.10973 13.8607 9.32935 13.683C9.49676 13.5479 9.4247 13.2788 9.21216 13.2455C8.93298 13.2016 8.93305 12.7993 9.21216 12.7553C9.4247 12.722 9.49676 12.4519 9.32935 12.3168C9.10988 12.1391 9.31079 11.7915 9.57446 11.893C9.77517 11.9704 9.97319 11.7724 9.89575 11.5717C9.79424 11.308 10.1419 11.1071 10.3196 11.3266C10.4547 11.494 10.7248 11.4219 10.7581 11.2094ZM11.0032 12.1616C10.54 12.1616 10.1643 12.5373 10.1643 13.0004C10.1645 13.4634 10.5402 13.8383 11.0032 13.8383C11.466 13.8381 11.8409 13.4632 11.8411 13.0004C11.8411 12.5374 11.4661 12.1618 11.0032 12.1616Z" fill="white"/>
                <path d="M10.7581 11.2094L9.77027 11.0536L9.77011 11.0546L10.7581 11.2094ZM11.2483 11.2094L12.2362 11.0546L12.2361 11.054L11.2483 11.2094ZM11.6858 11.3266L10.9083 10.6977L10.9076 10.6986L11.6858 11.3266ZM12.1106 11.5717L13.0436 11.9317L13.0441 11.9302L12.1106 11.5717ZM12.4309 11.893L12.7907 12.826L12.7908 12.826L12.4309 11.893ZM12.676 12.3168L13.304 13.095L13.3048 13.0944L12.676 12.3168ZM12.7932 12.7553L12.9481 11.7674L12.948 11.7674L12.7932 12.7553ZM12.7932 13.2455L12.6384 12.2576L12.6382 12.2576L12.7932 13.2455ZM12.676 13.683L13.3043 12.9051L13.304 12.9048L12.676 13.683ZM12.4309 14.1078L12.071 15.0408L12.0716 15.0411L12.4309 14.1078ZM12.1106 14.4282L13.0438 14.0689L13.0436 14.0682L12.1106 14.4282ZM11.6858 14.6733L10.9076 15.3013L10.9078 15.3016L11.6858 14.6733ZM11.2483 14.7905L10.2604 14.6354L10.2603 14.6357L11.2483 14.7905ZM10.7581 14.7905L9.77011 14.9452L9.77013 14.9454L10.7581 14.7905ZM10.3196 14.6733L11.0972 15.302L11.0978 15.3013L10.3196 14.6733ZM9.89575 14.4282L10.8287 14.7881L10.8288 14.7879L9.89575 14.4282ZM9.57446 14.1078L9.93296 15.0414L9.9344 15.0408L9.57446 14.1078ZM9.32935 13.683L8.70133 12.9048L8.70049 12.9055L9.32935 13.683ZM9.21216 13.2455L9.0567 14.2334L9.05739 14.2335L9.21216 13.2455ZM9.21216 12.7553L9.05739 11.7674L9.05635 11.7675L9.21216 12.7553ZM9.32935 12.3168L8.70003 13.094L8.70133 13.095L9.32935 12.3168ZM9.57446 11.893L9.9344 10.96L9.93373 10.9598L9.57446 11.893ZM9.89575 11.5717L8.96252 11.931L8.96278 11.9317L9.89575 11.5717ZM10.3196 11.3266L11.0978 10.6986L11.0967 10.6973L10.3196 11.3266ZM11.0032 12.1616L11.0037 11.1616H11.0032V12.1616ZM10.1643 13.0004L9.16431 13.0004L9.16431 13.0008L10.1643 13.0004ZM11.0032 13.8383L11.0032 14.8383L11.0037 14.8383L11.0032 13.8383ZM11.8411 13.0004L12.8411 13.0008V13.0004H11.8411ZM10.7581 11.2094L11.7458 11.3652C11.6126 12.2097 10.394 12.2137 10.2604 11.3649L11.2483 11.2094L12.2361 11.054C12.0147 9.64673 9.99152 9.6509 9.77027 11.0536L10.7581 11.2094ZM11.2483 11.2094L10.2603 11.3642C10.428 12.4341 11.7843 12.7968 12.464 11.9546L11.6858 11.3266L10.9076 10.6986C11.317 10.1912 12.1352 10.4098 12.2362 11.0546L11.2483 11.2094ZM11.6858 11.3266L12.4633 11.9555C11.9243 12.6219 10.8701 12.0126 11.1771 11.2132L12.1106 11.5717L13.0441 11.9302C13.5536 10.6035 11.8026 9.59201 10.9083 10.6977L11.6858 11.3266ZM12.1106 11.5717L11.1776 11.2118C10.7901 12.2163 11.7753 13.2176 12.7907 12.826L12.4309 11.893L12.0711 10.96C12.6851 10.7232 13.2763 11.3285 13.0436 11.9317L12.1106 11.5717ZM12.4309 11.893L12.7908 12.826C11.992 13.1342 11.3796 12.0791 12.0473 11.5392L12.676 12.3168L13.3048 13.0944C14.4121 12.1991 13.3975 10.4483 12.071 10.96L12.4309 11.893ZM12.676 12.3168L12.048 11.5386C11.2076 12.2169 11.5663 13.5753 12.6384 13.7433L12.7932 12.7553L12.948 11.7674C13.5951 11.8687 13.8097 12.687 13.304 13.095L12.676 12.3168ZM12.7932 12.7553L12.6383 13.7432C11.7917 13.6105 11.7902 12.3905 12.6384 12.2576L12.7932 13.2455L12.948 14.2335C14.3551 14.0131 14.3537 11.9878 12.9481 11.7674L12.7932 12.7553ZM12.7932 13.2455L12.6382 12.2576C11.5691 12.4254 11.2054 13.7813 12.048 14.4612L12.676 13.683L13.304 12.9048C13.8118 13.3146 13.5924 14.1324 12.9482 14.2335L12.7932 13.2455ZM12.676 13.683L12.0477 14.461C11.381 13.9226 11.9896 12.8664 12.7902 13.1746L12.4309 14.1078L12.0716 15.0411C13.3998 15.5525 14.4109 13.7988 13.3043 12.9051L12.676 13.683ZM12.4309 14.1078L12.7908 13.1749C11.7808 12.7852 10.7879 13.7781 11.1776 14.7881L12.1106 14.4282L13.0436 14.0682C13.2784 14.6768 12.6796 15.2756 12.071 15.0408L12.4309 14.1078ZM12.1106 14.4282L11.1774 14.7875C10.8691 13.9869 11.9254 13.3783 12.4638 14.045L11.6858 14.6733L10.9078 15.3016C11.8015 16.4082 13.5552 15.3971 13.0438 14.0689L12.1106 14.4282ZM11.6858 14.6733L12.464 14.0453C11.784 13.2027 10.4281 13.5664 10.2604 14.6354L11.2483 14.7905L12.2362 14.9455C12.1351 15.5896 11.3174 15.8091 10.9076 15.3013L11.6858 14.6733ZM11.2483 14.7905L10.2603 14.6357C10.3932 13.7875 11.6132 13.7889 11.746 14.6356L10.7581 14.7905L9.77013 14.9454C9.9905 16.3509 12.0158 16.3524 12.2362 14.9452L11.2483 14.7905ZM10.7581 14.7905L11.746 14.6357C11.578 13.5636 10.2196 13.2048 9.54138 14.0453L10.3196 14.6733L11.0978 15.3013C10.6897 15.8069 9.87148 15.5923 9.77011 14.9452L10.7581 14.7905ZM10.3196 14.6733L9.54197 14.0445C10.0818 13.3768 11.1369 13.9893 10.8287 14.7881L9.89575 14.4282L8.96278 14.0682C8.451 15.3948 10.2019 16.4093 11.0972 15.302L10.3196 14.6733ZM9.89575 14.4282L10.8288 14.7879C11.2203 13.7725 10.2191 12.7873 9.21452 13.1749L9.57446 14.1078L9.9344 15.0408C9.33125 15.2735 8.72595 14.6824 8.96271 14.0684L9.89575 14.4282ZM9.57446 14.1078L9.21597 13.1743C10.0154 12.8673 10.6247 13.9215 9.9582 14.4606L9.32935 13.683L8.70049 12.9055C7.59476 13.7998 8.60629 15.5509 9.93296 15.0414L9.57446 14.1078ZM9.32935 13.683L9.95736 14.4612C10.7996 13.7816 10.4368 12.4252 9.36693 12.2576L9.21216 13.2455L9.05739 14.2335C8.41256 14.1325 8.19395 13.3143 8.70133 12.9048L9.32935 13.683ZM9.21216 13.2455L9.36761 12.2577C10.2165 12.3913 10.2125 13.6099 9.36797 13.7431L9.21216 12.7553L9.05635 11.7675C7.65365 11.9888 7.64948 14.0119 9.0567 14.2334L9.21216 13.2455ZM9.21216 12.7553L9.36693 13.7433C10.4391 13.5753 10.7978 12.2169 9.95736 11.5386L9.32935 12.3168L8.70133 13.095C8.19572 12.687 8.41032 11.8687 9.05739 11.7674L9.21216 12.7553ZM9.32935 12.3168L9.95866 11.5397C10.6255 12.0796 10.0138 13.1337 9.21519 12.8262L9.57446 11.893L9.93373 10.9598C8.6078 10.4493 7.59429 12.1986 8.70003 13.094L9.32935 12.3168ZM9.57446 11.893L9.21452 12.826C10.2246 13.2157 11.2184 12.2218 10.8287 11.2118L9.89575 11.5717L8.96278 11.9317C8.72797 11.323 9.32578 10.7252 9.9344 10.96L9.57446 11.893ZM9.89575 11.5717L10.829 11.2124C11.1364 12.011 10.0824 12.6227 9.54243 11.9559L10.3196 11.3266L11.0967 10.6973C10.2013 9.59155 8.45207 10.605 8.96252 11.931L9.89575 11.5717ZM10.3196 11.3266L9.54138 11.9546C10.2196 12.7951 11.578 12.4363 11.746 11.3642L10.7581 11.2094L9.77011 11.0546C9.87148 10.4076 10.6897 10.193 11.0978 10.6986L10.3196 11.3266ZM11.0032 12.1616V11.1616C9.98775 11.1616 9.16431 11.985 9.16431 13.0004H10.1643H11.1643C11.1643 13.0896 11.0923 13.1616 11.0032 13.1616V12.1616ZM10.1643 13.0004L9.16431 13.0008C9.16473 14.0169 9.98898 14.8383 11.0032 14.8383V13.8383V12.8383C11.0913 12.8383 11.1643 12.9099 11.1643 13L10.1643 13.0004ZM11.0032 13.8383L11.0037 14.8383C12.0182 14.8378 12.8406 14.0158 12.8411 13.0008L11.8411 13.0004L10.8411 13C10.8411 12.9107 10.9137 12.8384 11.0026 12.8383L11.0032 13.8383ZM11.8411 13.0004H12.8411C12.8411 11.9861 12.0195 11.1621 11.0037 11.1616L11.0032 12.1616L11.0026 13.1616C10.9127 13.1615 10.8411 13.0888 10.8411 13.0004H11.8411Z" fill="white" mask="url(#path-3-inside-1_2071_3367)"/>
              </svg>
            </CollapsedsidebarIconbutton>
            <CollapsedsidebarIconbutton className='bg-surface' tooltipText='Library'>
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1L10.7961 6.52786H16.6085L11.9062 9.94427L13.7023 15.4721L9 12.0557L4.29772 15.4721L6.09383 9.94427L1.39155 6.52786H7.20389L9 1Z" stroke="white" strokeLinejoin="round"/>
              </svg>
            </CollapsedsidebarIconbutton>
            <CollapsedsidebarIconbutton className='bg-surface' tooltipText='Questions'>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="16" height="16" rx="4" stroke="white"/>
                <path d="M8.46129 10.3636V10.3295C8.46508 9.9678 8.50296 9.67992 8.57493 9.46591C8.6469 9.25189 8.74917 9.0786 8.88175 8.94602C9.01432 8.81345 9.17341 8.69129 9.35902 8.57955C9.47076 8.51136 9.57114 8.43087 9.66016 8.33807C9.74917 8.24337 9.81925 8.13447 9.87038 8.01136C9.92341 7.88826 9.94993 7.75189 9.94993 7.60227C9.94993 7.41667 9.90637 7.25568 9.81925 7.11932C9.73213 6.98295 9.61565 6.87784 9.46982 6.80398C9.32398 6.73011 9.16205 6.69318 8.98402 6.69318C8.82872 6.69318 8.6791 6.72538 8.53516 6.78977C8.39122 6.85417 8.27095 6.95549 8.17436 7.09375C8.07777 7.23201 8.0219 7.41288 8.00675 7.63636H7.29084C7.30599 7.31439 7.38932 7.03883 7.54084 6.80966C7.69425 6.58049 7.89595 6.4053 8.14595 6.28409C8.39785 6.16288 8.6772 6.10227 8.98402 6.10227C9.31735 6.10227 9.60713 6.16856 9.85334 6.30114C10.1014 6.43371 10.2927 6.61553 10.4272 6.84659C10.5636 7.07765 10.6317 7.34091 10.6317 7.63636C10.6317 7.8447 10.5996 8.03314 10.5352 8.2017C10.4727 8.37027 10.3817 8.52083 10.2624 8.65341C10.145 8.78598 10.003 8.90341 9.83629 9.00568C9.66963 9.10985 9.5361 9.2197 9.43572 9.33523C9.33535 9.44886 9.26243 9.58428 9.21697 9.74148C9.17152 9.89867 9.1469 10.0947 9.14311 10.3295V10.3636H8.46129ZM8.82493 12.0455C8.68478 12.0455 8.56451 11.9953 8.46413 11.8949C8.36375 11.7945 8.31357 11.6742 8.31357 11.5341C8.31357 11.3939 8.36375 11.2737 8.46413 11.1733C8.56451 11.0729 8.68478 11.0227 8.82493 11.0227C8.96508 11.0227 9.08535 11.0729 9.18572 11.1733C9.2861 11.2737 9.33629 11.3939 9.33629 11.5341C9.33629 11.6269 9.31262 11.7121 9.26527 11.7898C9.21982 11.8674 9.15826 11.9299 9.08061 11.9773C9.00485 12.0227 8.91963 12.0455 8.82493 12.0455Z" fill="white"/>
              </svg>
            </CollapsedsidebarIconbutton>
            <CollapsedsidebarIconbutton className='bg-surface' tooltipText='Guides'>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.77778 5V9V13M2.77778 5V2C2.77778 1.44772 3.22549 1 3.77778 1H16C16.5523 1 17 1.44772 17 2V16C17 16.5523 16.5523 17 16 17H3.77778C3.22549 17 2.77778 16.5523 2.77778 16V13M2.77778 5H1M2.77778 13H1" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 6H8M7 9H10M7 12H9" stroke="white" strokeLinecap="round"/>
              </svg>
            </CollapsedsidebarIconbutton>
          </SidebarGroup>
        </CollapsedsidebarContent>
        <CollapsedsidebarFooter>
          <CollapsedsidebarfooterOptions className='ml-6 py-3 rounded-8 bg-surface' optionsButton={<SidebarAvatar iconsize={'12'}/>}>
            <button className='w-full h-10 px-6 text-white bg-surface flex items-center gap-3 text-sm font-medium tracking-wide hover:bg-white hover:bg-opacity-10 rounded-4'>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.67232 3.16654C6.10874 2.73013 6.72219 2.51965 7.33461 2.5962L10.4773 2.98904C11.3852 3.10252 12.1003 3.81764 12.2138 4.72552L12.6066 7.86822C12.6832 8.48064 12.4727 9.09409 12.0363 9.5305L7.77821 13.7886C6.99716 14.5696 5.73083 14.5696 4.94978 13.7886L1.41425 10.253C0.633197 9.472 0.633198 8.20567 1.41425 7.42462L5.67232 3.16654Z" stroke="white"/>
                <path d="M10.6995 5.14636C10.2843 4.77989 10.0225 4.24371 10.0225 3.64636C10.0225 2.54179 10.9179 1.64636 12.0225 1.64636C13.127 1.64636 14.0225 2.54179 14.0225 3.64636C14.0225 4.52097 13.4611 5.26445 12.679 5.53612" stroke="white" strokeLinecap="round"/>
              </svg>
              Upgrade your plan
            </button>
            <button className='w-full h-10 px-6 text-white bg-surface flex items-center gap-3 text-sm font-medium tracking-wide hover:bg-white hover:bg-opacity-10 rounded-md'>
              <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.5625" cy="4.75" r="3.75" stroke="white"/>
                <path d="M1 13.5C1 10.7386 3.23858 8.5 6 8.5H9.125C11.8864 8.5 14.125 10.7386 14.125 13.5V13.5C14.125 14.8807 13.0057 16 11.625 16H3.5C2.11929 16 1 14.8807 1 13.5V13.5Z" stroke="white"/>
              </svg>
              Account
            </button>
            <button className='w-full h-10 px-6 text-white bg-surface flex items-center gap-3 text-sm font-medium tracking-wide hover:bg-white hover:bg-opacity-10 rounded-md'>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.67226 3.16654C6.10868 2.73013 6.72213 2.51965 7.33455 2.5962L10.4772 2.98904C11.3851 3.10252 12.1002 3.81764 12.2137 4.72552L12.6066 7.86822C12.6831 8.48064 12.4726 9.09409 12.0362 9.5305L7.77815 13.7886C6.9971 14.5696 5.73077 14.5696 4.94972 13.7886L1.41418 10.253C0.633136 9.472 0.633137 8.20567 1.41419 7.42462L5.67226 3.16654Z" stroke="white"/>
                <path d="M10.6995 5.14636C10.2843 4.77989 10.0224 4.24371 10.0224 3.64636C10.0224 2.54179 10.9178 1.64636 12.0224 1.64636C13.127 1.64636 14.0224 2.54179 14.0224 3.64636C14.0224 4.52097 13.461 5.26445 12.6789 5.53612" stroke="white" strokeLinecap="round"/>
              </svg>
              Billing
            </button>
            <button className='w-full h-10 px-6 text-white bg-surface flex items-center gap-3 text-sm font-medium tracking-wide hover:bg-white hover:bg-opacity-10 rounded-md'>
              <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6667 7.27451C11.6156 6.87825 11.5812 6.4446 11.5594 5.99624C11.4283 3.30631 9.35979 1 6.66667 1C3.97354 1 1.905 3.30631 1.77395 5.99624C1.75211 6.4446 1.7177 6.87825 1.66667 7.27451C1.50592 8.52267 1.09222 10.083 0.717233 11.3354C0.366019 12.5084 1.08326 13.7545 2.29461 13.9331C3.64241 14.1318 5.33682 14.3333 6.66667 14.3333C7.99651 14.3333 9.69093 14.1318 11.0387 13.9331C12.2501 13.7545 12.9673 12.5084 12.6161 11.3354C12.2411 10.083 11.8274 8.52267 11.6667 7.27451Z" stroke="white"/>
                <path d="M8.33333 15.1667C7.8487 15.6932 7.26694 16 6.64133 16C6.03738 16 5.47429 15.7141 5 15.2205" stroke="white" strokeLinecap="round"/>
              </svg>
              Notifications
            </button>        
            <Separator className='my-1 border border-white/10'/>
            <button className='w-full h-10 px-6 text-white bg-surface flex items-center gap-3 text-sm font-medium tracking-wide hover:bg-white hover:bg-opacity-10 rounded-md'>
              <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.10156 3.8125C2.69655 4.75058 1 7.02259 1 9.67642C1 13.1688 3.93813 16 7.5625 16C11.1869 16 14.125 13.1688 14.125 9.67642C14.125 7.02259 12.4285 4.75058 10.0234 3.8125" stroke="white" strokeLinecap="round"/>
                <path d="M7.5625 7.09375V1" stroke="white" strokeLinecap="round"/>
              </svg>
              Logout
            </button>
          </CollapsedsidebarfooterOptions>
        </CollapsedsidebarFooter>
    </CollapsedSidebar>
    )}
    </div>
  )
}

export default SidebarDemoTwo;
