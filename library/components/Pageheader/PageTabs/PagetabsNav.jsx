import React from 'react';

function PagetabsNav({children, className = ''}) {
  return (
    <div className= {`w-full ${className}`}>
        {children}
    </div>
  )
}

export default PagetabsNav;
