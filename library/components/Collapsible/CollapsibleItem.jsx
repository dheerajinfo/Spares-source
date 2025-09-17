import React from 'react';

function CollapsibleItem({children, className = ''}) {
  return (
    <>
        <p className={`text-sm font-normal ${className}`}>
            {children}
        </p>
    </>
  )
}

export default CollapsibleItem;
