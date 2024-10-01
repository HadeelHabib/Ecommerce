import React from 'react'
import Feature from '../components/feature'
import { SVGS } from '@/utils/svgs'

const Features = () => {
  return (
    <div className='grid md:my-[10%] w-[95%] md:w-[80%] m-auto md:grid-cols-2 xl:grid-cols-4 gap-x-5' >
      <Feature icon={SVGS.truck} title='Free Delivery'  subtitle='Orders from all items'/>
      <Feature icon={SVGS.money} title='Return & Refund'  subtitle='Money back guarantee'/>
      <Feature icon={SVGS.mask} title='Member Discount'  subtitle='Onevery Order over $140.00'/>
      <Feature icon={SVGS.headphone} title='Support 24/7'  subtitle='Contact us 24 hours a day'/>

    </div>
  )
}

export default Features
