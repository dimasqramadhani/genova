import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Steps = () => {
  return (
    <motion.div 
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center my-25 px-4 sm:px-8'
    >
      <h1 className='text-2xl sm:text-4xl font-semibold text-center mb-2'>Cara Platform Ini Bekerja</h1>
      <p className='text-base sm:text-lg text-gray-600 text-center mb-8'>
        Ciptakan Gambar Menakjubkan dari Deskripsi Teks Anda
      </p>

      <div className='space-y-4 w-full max-w-3xl text-sm'>
        {stepsData.map((item, index) => (
          <div
            key={index}
            className='flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 px-6 sm:px-8 bg-white/20 shadow-md cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-lg'
          >
            <img src={item.icon} alt="" className='w-10 h-10' />
            <div>
              <h2 className='text-base sm:text-xl font-medium'>{item.title}</h2>
              <p className='text-gray-500 text-sm sm:text-base'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Steps
