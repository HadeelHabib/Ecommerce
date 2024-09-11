'use client'
import { ICONS } from '@/utils/icons';
import { IMGS } from '@/utils/imgs';
import Image from 'next/image';
import React, { useState } from 'react'

const Hero = () => {
  const [active,setActive] = useState(0);
  return (
    <div className='h-screen  bg-[#115061] text-white'>
      <div className=" flex  flex-row-reverse items-center pt-[9%]">
          <Image className='' src={IMGS.bg} alt=""/>
    <div className="w-[40%] m-auto pt-[10%]">
    <h6 className='text-[16px]'>Starting with $dollar at</h6>
      <h1 className='font-[900] text-[56px] leading-[1.07]'>The best tablet <br/>Collection 2024 </h1>
      <h3 className='font-Nerko_One font-[400] text-[24px]'>Exclusive offer <span className='text-yellow-200 '>-35% </span>off this week</h3>
    </div>
    </div>
     
      <div className="  mx-auto absolute top-[60%] flex justify-between ">
      <span className='p-2 hover:bg-[#ffffff86] transition-all ease-linear rounded-full '> {ICONS.rightIcon}</span>
      <span className='p-2 hover:bg-[#ffffff86] transition-all ease-linear rounded-full'> {ICONS.leftICON}</span>
      </div>
    </div>
  )
}

export default Hero
