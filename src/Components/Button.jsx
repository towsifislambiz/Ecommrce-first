import React from 'react'

const Button = ({ className = "", Text ,  }) => {
  return (
    <button
      className={`cursor-pointer font-pop font-medium text-base px-12 py-4 rounded duration-300 ${className}`}
    >
      {Text}
    </button>
  )
}

export default Button