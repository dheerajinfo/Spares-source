import React from 'react'

function CardSubheadline({children, className=''}) {
  return (
      <p className={`text-xs opacity-80 ${className}`}>
      {children}
    </p>
  )
}

export default CardSubheadline
