import React from 'react'
import image3 from "../assets/image3.png"
import Group6 from "../assets/Group6.svg"
import Group1 from "../assets/Group1.svg"
// import Ellipse1 from "../assets/Ellipse1.png"

const Header = () => {
  return (
    <div className='w-full flex justify-between'>
      <div className='flex w-[60px] items-center m-3'>
        <img src={image3} alt="" className='m-1'/>200
      </div>
      <div className='font-bold text-2xl m-3'>Fantasy quiz</div>
      <div className='m-3'><img src={Group1} alt="" /></div>
    </div>
  )
}

export default Header
