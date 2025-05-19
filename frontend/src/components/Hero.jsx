import React from 'react'
import { assets } from '../assets/assets'
const Hero = () => {
  return (
    <div className='w-full max-w-[1280px] mx-auto h-[500px]'>
        <img src={assets.hero} alt="" className='w-full h-full object-obtain' />
    </div>
  )
}

export default Hero
