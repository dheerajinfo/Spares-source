import React from 'react'
import Inline from '../../library/layouts/Inline'
import LinkItem from '../../library/components/Navmenu/LinkItem'
import Button from '../../library/components/Button'

function InlineDemo() {
  return (
      <Inline className='text-white justify-between h-16'>
        <h3 className='text-base font-medium tracking-widest'>Logo</h3>
        <div className='flex flex-row gap-4 '>
          <LinkItem className='flex'>Home</LinkItem>
          <LinkItem className='hidden lg:flex'>About</LinkItem>
          <LinkItem className='hidden lg:flex'>Contact</LinkItem>
        </div>
        <Button className='bg-elevation px-5'>Login</Button>
      </Inline>
  )
}

export default InlineDemo
