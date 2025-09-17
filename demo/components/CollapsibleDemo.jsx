import React from 'react';
import Collapsible from '../../library/components/Collapsible/Collapsible';
import CollapsibleMenu from '../../library/components/Collapsible/CollapsibleMenu';
import CollapsibleItem from '../../library/components/Collapsible/CollapsibleItem';

function CollapsibleDemo() {
  return (
    <Collapsible className='bg-black text-white'>
      <CollapsibleMenu className='px-5 w-fit' iconColor='white' label={'More'}>
        <CollapsibleItem className='px-5' >
            <a href="">Edit</a>
        </CollapsibleItem>
        <CollapsibleItem className='px-5' >
            <a href="">Undo</a>
        </CollapsibleItem>
      </CollapsibleMenu>
    </Collapsible>
  )
}

export default CollapsibleDemo;
