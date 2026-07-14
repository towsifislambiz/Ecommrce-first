import React from 'react'

const Heading2 = ({Text , className}) => {
  return (
    <div>
      <h1 className={`font-inter font-semibold text-5xl text-c2 leading-[60px] ${className}`}>{Text}</h1>
    </div>
  )
}

export default Heading2
