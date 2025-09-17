import React from 'react';

function Showmore({children, className = ''}) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  )
}

export default Showmore;
