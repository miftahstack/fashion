import React from 'react'

const Flex = ({className , children}) => {
  return (
    <div className={`flex mx-auto ${className}`}>{children}</div>
  )
}

export default Flex