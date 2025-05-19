import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <h1>About us</h1>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.footer} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-white text-justify'>
          <p>

            At Lustrax, we don't just protect cars — we elevate them. Founded with a deep love for automotive excellence, we specialize in Paint Protection Film (PPF), window tinting, and premium car enhancement products that keep your vehicle looking flawless and performing at its best.

            Whether you're shielding your car's paint from the road or upgrading its style and comfort with precision tinting, our team delivers professional-grade results with unmatched attention to detail. We use only industry-leading materials and techniques, ensuring lasting protection, style, and value. </p>
          <b className='text-white'>Our Mission</b>
          <p> To deliver premium automotive protection and styling solutions that combine innovation, precision, and passion — helping every vehicle look its best and last longer on the road. </p>
          <b className='text-white'>Our Vision</b>
          <p> To be the most trusted and recognized name in automotive protection, setting new standards in quality, service, and customer satisfaction — one vehicle at a time.</p>
        </div>
      </div>
    </div>

  )
}

export default About