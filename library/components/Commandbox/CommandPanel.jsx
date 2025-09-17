import React from 'react'

function CommandPanel({children, className = ''}) {
  return (
    <div className={`rounded-4 z-50 ${className}`}>
      {children}
    </div>
  )
}

export default CommandPanel
