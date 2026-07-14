import React from 'react'

const Listitem1 = ({Text , className}) => {
  return (
    <div>
<li className={`inline-block cursor-pointer relative list-none font-pop font-normal text-black text-base
after:absolute after:bottom-0 after:left-0 after:bg-[#828282] after:w-0 after:h-[2px] after:content-[""]
after:transition-all after:duration-300
hover:after:w-full ${className}`}>
  {Text}
</li>
</div>
  )
}

export default Listitem1
