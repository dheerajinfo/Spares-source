import React from 'react';

function StepStage({children, className = ''}) {
  return (
    <div className={`flex items-center justify-center rounded-full h-6 w-6 bg-black ${className}`}>
        {children}
    </div>
  )
}

export default StepStage;
