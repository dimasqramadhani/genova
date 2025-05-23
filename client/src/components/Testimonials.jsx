import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div 
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center my-25 px-4 sm:px-12'
    >
      <h1 className='text-2xl sm:text-4xl font-semibold text-center mb-2'>Testimoni Pengguna</h1>
      <p className='text-gray-500 text-center mb-8'>Apa Kata Mereka Tentang Layanan Kami</p>

      <div className='flex flex-wrap justify-center gap-x-6 gap-y-8'>
        {testimonialsData.map((testimonials, index) => (
          <div
            key={index}
            className='bg-white/20 p-8 sm:p-12 rounded-lg shadow-md w-full sm:w-[300px] max-w-xs cursor-pointer hover:scale-[1.02] transition-all'
          >
            <div className='flex flex-col items-center'>
              <img src={testimonials.image} alt="" className='rounded-full w-14' />
              <h2 className='text-base sm:text-xl font-semibold mt-3'>{testimonials.name}</h2>
              <p className='text-gray-500 mb-4 text-sm sm:text-base'>{testimonials.role}</p>
              <div className='flex mb-4'>
                {Array(testimonials.stars).fill().map((_, index) => (
                  <img key={index} src={assets.rating_star} alt="" className='w-4 h-4' />
                ))}
              </div>
              <p className='text-center text-sm text-gray-600'>{testimonials.text}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials
