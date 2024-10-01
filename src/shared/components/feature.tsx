import React from 'react'

const Feature :React.FC<Prop>= ({icon,title,subtitle}) => {
  return (
    <div className='pt-[29px] px-[40px] pb-[20px] bg-[#f6f7f9] my-4'>
        <div className="flex justify-around items-center">
            <span className='text-[#fd4b6b] mr-2'>{icon}</span>
            <div className="">
                <h3 className='text-[16px] mb-0'>{title}</h3>
                <p className='text-[14px]'>{subtitle}</p>
            </div>
        </div>
    </div>
  )
}

export default Feature
