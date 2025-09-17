import React from 'react';
import Button from "../../library/components/Button";
import Box from "../../library/layouts/Box";
import Frame from "../../library/layouts/Frame";
import Inline from "../../library/layouts/Inline";
import Split from "../../library/layouts/Split";
import Stack from "../../library/layouts/Stack";

function HeroDemoTwo() {
  return (
    <Split cols={2} className="bg-black text-white w-full pb-24">
      <div className='h-screen flex items-center'>
        <Stack className="gap-3">
          <h6 className='text-sm'>KEYWORD</h6>
          <h1 className='text-5xl'>Title</h1>
          <p className='text-base max-w-[420px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates alias pariatur sit iure nisi, aspernatur provident quasi dolorum veniam quam quis, sapiente nesciunt. Facere perferendis recusandae ullam expedita quasi sequi?</p>
          <Inline className="gap-3 mt-8">
            <Button className="border border-white/20 w-24 py-2">Login</Button>
            <Button className='bg-white/10 text-white w-24 py-2'>
              <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 4.81366C9.16667 5.19856 9.16667 6.16081 8.5 6.54571L2.5 10.0098C1.83333 10.3947 1 9.91359 1 9.14379V2.21559C1 1.44579 1.83333 0.964661 2.5 1.34956L8.5 4.81366Z" stroke="white" strokeWidth="0.5"/>
              </svg>
                Tutorials
            </Button>
          </Inline>
        </Stack>
      </div>
      <Box className='h-full'>  
        <Frame ratio={1/1} className="bg-white/60 rounded-8 w-80" />  
      </Box>
    </Split>
  )
}

export default HeroDemoTwo;
