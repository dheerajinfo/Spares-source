import React from 'react'

function CardOriginalprice({children, className=''}) {
  return (
    <p className={`text-sm line-through ${className}`}>
      {children}
    </p>
  )
}

export default CardOriginalprice
