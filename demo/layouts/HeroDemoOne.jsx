import React from 'react';
import Button from "../../library/components/Button";
import Inline from "../../library/layouts/Inline";
import Stack from "../../library/layouts/Stack";

function HeroDemoOne() {
  return (
        <Stack className="text-white w-full py-24 h-screen gap-3 lg:justify-center justify-end lg:items-center">
          <h6 className='text-sm'>KEYWORD</h6>
          <h1 className='text-5xl'>Title</h1>
          <p className='text-base lg:w-1/2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates alias pariatur sit iure nisi, aspernatur provident quasi dolorum veniam quam quis, sapiente nesciunt. Facere perferendis recusandae ullam expedita quasi sequi?</p>
          <Inline className="gap-3 mt-8 lg:justify-center">
            <Button className="border border-white/20 w-24 py-2">Login</Button>
            <Button className='bg-white/10 text-white w-24 py-2'>
              <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 4.81366C9.16667 5.19856 9.16667 6.16081 8.5 6.54571L2.5 10.0098C1.83333 10.3947 1 9.91359 1 9.14379V2.21559C1 1.44579 1.83333 0.964661 2.5 1.34956L8.5 4.81366Z" stroke="white" strokeWidth="0.5"/>
              </svg>
                Tutorials
            </Button>
          </Inline>
        </Stack>
  )
}

export default HeroDemoOne;
