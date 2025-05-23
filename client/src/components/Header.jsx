import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion" // perbaiki: seharusnya "framer-motion", bukan "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  
  const { user, setShowLogin } = useContext(AppContext)
  const navigate = useNavigate()
  
  const onClickHandler = () => {
    if (user) {
      navigate('/result')
    } else {
      setShowLogin(true)
    }
  } 
  
  return (
    <motion.div 
      className='flex flex-col justify-center items-center text-center my-25 px-4 sm:px-6 lg:px-8' 
      initial={{ opacity: 0.2, y: 100 }} 
      transition={{ duration: 1 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
    >
      <motion.div 
        className='text-stone-500 inline-flex text-center gap-2 bg-white px-4 sm:px-6 py-1 rounded-full border border-neutral-500 text-sm sm:text-base' 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p>Generator teks menjadi gambar terbaik</p>
        <img src={assets.star_icon} alt="" className='h-4 sm:h-5' />
      </motion.div>

      <motion.h1 
        className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl max-w-[320px] sm:max-w-[600px] mx-auto mt-10 leading-snug sm:leading-tight'
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.4, duration: 2 }}
      >
        Ubah teks menjadi <span className='text-purple-500'>gambar</span> dalam hitungan detik.
      </motion.h1>

      <motion.p 
        className='text-center max-w-md sm:max-w-lg md:max-w-xl mx-auto mt-5 text-sm sm:text-base md:text-lg text-neutral-700 px-2 sm:px-0'
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Bebaskan kreativitasmu dengan AI — ubah imajinasi menjadi karya visual hanya dengan mengetik, dan lihat keajaibannya.
      </motion.p>

      <motion.button 
        onClick={onClickHandler} 
        className='cursor-pointer text-sm sm:text-base md:text-lg text-white bg-black w-auto mt-8 px-6 sm:px-10 lg:px-12 py-2.5 flex items-center gap-2 rounded-full'
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }} 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}
      >
        Ciptakan Gambar <img className='h-5 sm:h-6' src={assets.star_group} alt="" />
      </motion.button>

      <motion.div 
        className='flex flex-wrap justify-center mt-16 gap-3 px-2 sm:px-0'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {Array(6).fill('').map((item, index) => (
          <motion.img 
            className='rounded hover:scale-105 transition-all duration-300 cursor-pointer w-12 sm:w-12 md:w-20' 
            src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1} 
            alt="" 
            key={index}
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </motion.div>

      <motion.p 
        className='mt-2 text-neutral-600 text-sm sm:text-base'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Gambar hasil dari genova
      </motion.p>
    </motion.div>
  )
}

export default Header
