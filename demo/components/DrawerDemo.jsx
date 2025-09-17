import React, { useState, useRef, useEffect } from 'react';
import DrawerButton from '../../library/components/Drawer/DrawerButton';
import DrawerPanel from '../../library/components/Drawer/DrawerPanel';
import DrawerContent from '../../library/components/Drawer/DrawerContent';
import DrawerLink from '../../library/components/Drawer/DrawerLink';
import DrawerFooter from '../../library/components/Drawer/DrawerFooter';
import DrawerlinkHeader from '../../library/components/Drawer/DrawerlinkHeader';
import Separator from '../../library/components/Separator';

function DrawerDemo() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    if (!openDrawer) return;

    function handleClickOutside(event) {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setOpenDrawer(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDrawer]);

  return (
    <>
      <DrawerButton
        className="bg-black text-white"
        onClick={() => setOpenDrawer(true)}
      >
        Drawer
      </DrawerButton>

      {openDrawer && (
        <div className="fixed inset-0 z-50">
           <div className="absolute w-full h-full inset-0"
            onClick={() => setOpenDrawer(false)} />
          <DrawerPanel
            ref={drawerRef}
            className='rounded-t-24 bg-black border-t border-white/10'
            isOpen={openDrawer}
            onClick={() => setOpenDrawer(false)}
          >
            <DrawerLink className="w-full text-white text-tiny font-normal tracking-widest flex items-center justify-start border-none my-3 px-4">
              Dashboard
            </DrawerLink>

            <DrawerContent className="flex flex-col gap-0 my-2">
              <DrawerlinkHeader className="text-white/60 text-sm font-normal tracking-widest py-1 px-4">
                LEARN
              </DrawerlinkHeader>
              <DrawerLink className="w-full text-white text-tiny font-normal tracking-widest flex items-center justify-start border-none py-2 px-4">
                Courses
              </DrawerLink>
              <DrawerLink className="w-full text-white text-tiny font-normal tracking-widest flex items-center justify-start border-none py-2 px-4">
                Tracks
              </DrawerLink>
              <DrawerLink className="w-full text-white text-tiny font-normal tracking-widest flex items-center justify-start border-none py-2 px-4">
                Workshops
              </DrawerLink>
            </DrawerContent>

            <DrawerContent className="flex flex-col gap-0 my-2">
              <DrawerlinkHeader className="text-white/60 text-sm font-normal tracking-widest px-4">
                APPLY
              </DrawerlinkHeader>
              <DrawerLink className="w-full text-white text-tiny font-normal tracking-widest flex items-center justify-start border-none py-2 px-4">
                Practice
              </DrawerLink>
              <DrawerLink className="w-full text-white text-tiny font-normal tracking-widest flex items-center justify-start border-none py-2 px-4">
                Projects
              </DrawerLink>
            </DrawerContent>

            <DrawerContent className="flex flex-col gap-0 my-2">
              <DrawerlinkHeader className="text-white/60 text-sm font-normal tracking-widest py-1 px-4">
                RESOURCES
              </DrawerlinkHeader>
              <DrawerLink className="w-full text-white text-tiny font-normal tracking-widest flex items-center justify-start border-none py-2 px-4">
                Library
              </DrawerLink>
            </DrawerContent>

            <DrawerContent className="flex flex-col gap-0 my-2">
              <DrawerlinkHeader className="text-white/60 text-sm font-normal tracking-widest py-1 px-4">
                INTERVIEW HELP
              </DrawerlinkHeader>
              <DrawerLink className="w-full text-white text-tiny font-normal tracking-widest flex items-center justify-start border-none py-2 px-4">
                Questions
              </DrawerLink>
              <DrawerLink className="w-full text-white text-tiny font-normal tracking-widest flex items-center justify-start border-none py-2 px-4">
                Guides
              </DrawerLink>
            </DrawerContent>

            <Separator className="mt-12 border border-white/10" />

            <DrawerFooter className="w-full my-4 p-3 flex flex-col gap-3 items-start justify-start">
              <div className="w-full bg-black">
                <DrawerLink className="w-full text-white text-tiny font-normal tracking-widest flex items-center justify-start border-none py-2">
                  Upgrade your plan
                </DrawerLink>
                <DrawerLink className="w-full text-white text-tiny font-normal tracking-widest flex items-center justify-start border-none py-2">
                  Logout
                </DrawerLink>
              </div>
            </DrawerFooter>
          </DrawerPanel>
        </div>
      )}
    </>
  );
}

export default DrawerDemo;
