import React from 'react'

const Button2 = ({Text , className , className1}) => {
  return (
    <div>
<button className={`relative flex items-center px-4 py-2 font-pop font-semibold   group ${className}`}>

<span className="absolute -left-[10px] top-0 h-full w-5 rounded bg-c1 transition-all duration-400 group-hover:w-[calc(100%+10px)]"></span>

<span className={`relative z-10 transition-colors duration-300 group-hover:text-white ${className1}`}>
{Text}
</span>

</button>
    </div>
  )
}

export default Button2