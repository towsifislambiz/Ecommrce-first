import React from 'react'

const Heading = ({Text , className}) => {
  return (
    <div>
      <h1 className={`text-black font-pop font-semibold text-4xl ${className}`}>{Text}</h1>
    </div>
  )
}

export default Heading
