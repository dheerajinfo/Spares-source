import React from 'react';

function CommandBox({children, className = ''}) {
  return (
    <div className = {`${className}`}>
        {children}
    </div>
  )
}

export default CommandBox;
