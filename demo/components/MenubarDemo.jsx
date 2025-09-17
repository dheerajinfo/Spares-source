import React, { useState } from 'react';
import Menubar from '../../library/components/Menubar/Menubar';
import MenuOption from '../../library/components/Menubar/MenuOption';
import MenuButton from '../../library/components/Menubar/MenuButton';
import MenuPanel from '../../library/components/Menubar/MenuPanel';
import MenuInput from '../../library/components/Menubar/MenuInput';
import MenuItem from '../../library/components/Menubar/MenuItem';
import Submenu from '../../library/components/Menubar/Submenu';
import SubmenuPanel from '../../library/components/Menubar/SubmenuPanel';
import Submenuitems from '../../library/components/Menubar/SubmenuItems';
import SubmenuCollapsible from '../../library/components/Menubar/SubmenuCollapsible';


function MenubarDemo() {
    const [openPanel, setOpenPanel] = useState(false);
    const [openPanel5, setOpenPanel5] = useState(false);
    const [openPanel6, setOpenPanel6] = useState(false);

  return (
    <Menubar>
      <MenuOption>
        <MenuButton className='px-4 bg-black text-white text-xs items-center justify-center border-r border-white/5' onClick={() => setOpenPanel(!openPanel)}>File</MenuButton>
        
        {openPanel && (
        <MenuPanel className='gap-6 bg-black'>
          <MenuInput className='text-white bg-black h-10  placeholder-white' placeholder='Input'></MenuInput>    
          <MenuButton className='h-fit bg-black text-white flex justify-start pl-2'>New</MenuButton>
          <MenuButton className='h-fit pl-2 bg-black text-white'>Save</MenuButton>
          <MenuItem className='text-white pl-2'>This is the text for this panel.</MenuItem>
          <Submenu label='Submenu' className='text-white pl-2'>
            <SubmenuPanel className='bg-black'>
              <Submenuitems className='text-white'>Item</Submenuitems>
              <Submenuitems className='text-white'>Item</Submenuitems>
              <Submenuitems className='text-white'>Item</Submenuitems>
            </SubmenuPanel>
          </Submenu>
        </MenuPanel>)}
      </MenuOption>
      <MenuOption>
        <MenuButton className='px-4 text-xs bg-black text-white' onClick={() => setOpenPanel5(!openPanel5)}>Edit</MenuButton>
            {openPanel5 && (
        <MenuPanel className='bg-black'>
          <SubmenuCollapsible label='Expand' className='text-white bg-black'>
            <Submenuitems className='text-white'>Item</Submenuitems>
            <Submenuitems className='text-white'>Item</Submenuitems>
          </SubmenuCollapsible>
        </MenuPanel>)}
      </MenuOption>
      <MenuOption>
        <MenuButton className='px-4 text-xs bg-black text-white border-l border-white/5' onClick={() => setOpenPanel6(!openPanel6)}>Update</MenuButton>
            {openPanel6 && (
        <MenuPanel className='bg-black'>
          <MenuItem className='text-white pl-2'>This is version 1.0.1</MenuItem>
        </MenuPanel>)}
      </MenuOption>
    </Menubar>
  )
}

export default MenubarDemo;
