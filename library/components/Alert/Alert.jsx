import React from 'react';

function Alert({children, className='' }) {
  return (
    <>
        <div className={`rounded-4 w-fit px-8 py-4 ${className}`}>
            {children}
        </div>
    </>
  )
}

export default Alert;
