import React from 'react';

function CommandItem({children, className = ''}) {
  return (
    <div className={`${className}`}>
        {children}
    </div>
  )
}

export default CommandItem;
