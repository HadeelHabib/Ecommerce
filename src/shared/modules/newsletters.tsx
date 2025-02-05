import { IMGS } from '@/utils/imgs'
import { SVGS } from '@/utils/svgs'
import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const NewsLetters = () => {
  return (
    <div>
      <div className="bg-[#0989ff] dark:bg-[#0988ff6a] w-full sm:h-[250px] mt-[5%] ">
        <Image className='absolute  opacity-[.1] transperant-theme' src={IMGS.bgNewsletters} alt=''/>
        <div className="py-[5%] xl:flex justify-between items-center w-[80%] mx-auto">
            <div className="text-[#fff] ">
              <span className='font-[500] text-[16px] uppercase'>SALE 20% OFF ALL STORE</span> 
              <h1 className='font-[800] text-[40px] leading-[1]'>Subscribe our Newsletters</h1> 
            </div>
            <div className="subscribe-input relative">

                <div className="md:my-4 my-[15%]">
                <input className='sm:pr-[300px] pr-[100px]' type='email' placeholder='Enter your Email'/>
                <Button className='sm:absolute relative rounded-[8px] my-2 sm:my-0 sm:rounded-l-[0px]'>Subscribe</Button>
            </div>
            <span className='sm:absolute sm:inline hidden top-[-20px]  left-[-30px]'>{SVGS.Newsletter}</span>
            <span className='absolute  top-[-60px] left-[-54px] hidden sm:inline'><Image src={IMGS.plane} alt="" /> </span>
            <span className='absolute  top-[-90px] sm:right-[45px] right-[-10%]'><Image src={IMGS.news2} alt="" /> </span>

            </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetters
