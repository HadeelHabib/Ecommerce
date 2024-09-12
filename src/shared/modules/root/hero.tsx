'use client'
import { ICONS } from '@/utils/icons';
import { IMGS } from '@/utils/imgs';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import React, { useState } from 'react'

const Hero = () => {
  return (
    <div className='h-screen  bg-[#115061] text-white'>
      <div className="pt-[6%]">
        <Image src={IMGS.shape1} alt='' className='absolute top-[30%] left-[400px] lg:left-[900px]' />
        <Image src={IMGS.shape2} alt='' className='absolute top-[40%] left-[5%]' />
    <div className="lg:flex justify-between ml-[10%] m-auto pt-[15%]">
      <div className="">
    <h6 className='text-[16px]'>Starting with $dollar at</h6>
      <h1 className='font-[900] text-[56px] leading-[1.07]'>The best tablet <br/>Collection 2024 </h1>
      <h3 className='font-Nerko_One font-[400] text-[24px]'>Exclusive offer <span className='text-yellow-200 '>-35% </span>off this week</h3>
      <Button className='mt-4 bg-[#0989FF] leading-4 text-white border-none' >Shop Now</Button>
      </div>
      <Image  className='relative right-[100px] lg:top-[-50px] z-1' src={IMGS.slider} alt="" />
    </div>
    </div>
     
      
    </div>
  )
}

export default Hero
