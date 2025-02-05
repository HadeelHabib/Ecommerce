import { ICONS } from '@/utils/icons';
import { IMGS } from '@/utils/imgs';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

//lg:1024  ,sm:640 ,xl:1280  ,md:768  ,2xl:1536


const Hero = () => {
  return (
    <div className='lg:h-screen bg-[#115061] pb-8 dark:bg-[#1323289c] dark:border-b dark:border-b-[#ffffff62] dark:shadow-lg rounded-b-[150px] md:mt-[60px] text-white'>
      <div className="md:pt-[6%]">
        <Image className='absolute right-0 md:top-[80px] top-[40px] opacity-[.1] transperant-theme overflow-hidden ' src={IMGS.bg} alt='' />
        <Image src={IMGS.shape1} alt='' className='absolute md:left-[600px]' />
        <Image src={IMGS.shape2} alt='' className='absolute top-[40%] left-[5%] animated-pic' />
    <div className="lg:flex justify-between w-[80%] m-auto lg:pt-[10%] pt-[20%]">
      <div className="text-center lg:text-left">
    <h6 className='text-[16px] sm:mt-0 mt-5'>Starting with $dollar at</h6>
      <h1 className='sm:font-[900] font-[700] sm:text-[56px] text-[50px] leading-[1.07]'>The best tablet <br/>Collection 2024 </h1>
      <h3 className='font-Nerko_One font-[400] text-[24px] mb-4'>Exclusive offer <span className='text-yellow-200 '>-35% </span>off this week</h3>
       <Link href="/shop" className='py-3 px-[30px] font-[400] rounded-[5px] mt-[10px] mb-[20px] bg-white hover:bg-transparent leading-4 text-[#000] hover:text-white border-[0.3px] border-white' >Shop Now</Link> 
      </div>
      <Image  className='flex items-center mx-auto z-1 relative lg:mt-0 mt-8' src={IMGS.slider} alt="" />
    </div>
    </div>
     
      
    </div>
  )
}

export default Hero
