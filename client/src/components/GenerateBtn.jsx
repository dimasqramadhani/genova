import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const GenerateBtn = () => {

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
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className=' my-25 pb-16 px-4 sm:px-6 lg:px-8 text-center'
    >
      <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-800 py-6 sm:py-10 md:py-16'>
        Saksikan keajaibannya. Coba sekarang
      </h1>

      <button 
        onClick={onClickHandler} 
        className='inline-flex items-center gap-2 px-6 sm:px-8 md:px-10 lg:px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500 cursor-pointer text-sm sm:text-base md:text-lg'
      >
        Ciptakan Gambar 
        <img className='h-5 sm:h-6' src={assets.star_group} alt="" />
      </button>
    </motion.div>
  )
}

export default GenerateBtn
