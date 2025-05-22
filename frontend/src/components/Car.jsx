import React, { use } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'


const Car = () => {
  const items = [
    { src: assets.PPF, label: 'PPF (Paint Protection Film)' },
    { src: assets.tint, label: 'CERAMIC CAR TINT' },
    { src: assets.Microfiber, label: 'TOWELS AND SPONGES' },
    { src: assets.ceramic, label: 'CERAMIC COATING' },
    { src: assets.lubricants, label: 'LUBRICANTS' },
    { src: assets.Polishing, label: 'POLISHING WAX' },
  ]
  
  const navigate = useNavigate()

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <h1 className='text-white font-medium'>Car Care</h1>
      </div>

      <div className="text-center grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6">
        {items.map(({ src, label }, i) => (
          <div key={i} className="group cursor-pointer flex flex-col items-center">
            {/* Square image with overlay */}
            <div className="relative w-full aspect-square overflow-hidden rounded-xl">
              <img
                src={src}
                alt={label}
                className="w-full h-full object-cover rounded-xl transition-transform duration-500"
              />
              {/* Overlay text */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p onClick={()=>navigate('/allproducts')} className="text-white text-lg font-semibold text-center px-4">{label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Car
