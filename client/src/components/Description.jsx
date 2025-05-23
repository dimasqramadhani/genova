import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Description = () => {
  return (
    <motion.div 
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center my-25 px-4 md:px-28'
    >
      <h1 className='text-2xl sm:text-4xl font-semibold text-center mb-2'>Buat Gambar AI</h1>
      <p className='text-gray-500 text-center mb-8'>Ubah imajinasimu menjadi visual</p>

      <div className='flex flex-col md:flex-row gap-8 md:gap-14 items-center md:items-start'>
        <img src={assets.sample_img_1} alt="" className='w-full max-w-xs sm:max-w-sm xl:max-w-md rounded-lg' />
        
        <div className='text-sm sm:text-base'>
          <h2 className='text-xl sm:text-2xl md:text-3xl font-medium max-w-lg mb-4'>
            Memperkenalkan Generator Teks menjadi Gambar Berbasis AI
          </h2>
          <p className='text-gray-600 mb-4'>
            Dengan mudah hidupkan ide-ide kamu menggunakan generator gambar AI gratis kami. Baik untuk visual menakjubkan atau gambar unik, alat kami mengubah teks menjadi gambar menarik hanya dengan beberapa klik. Bayangkan, jelaskan, dan saksikan hasilnya langsung.
          </p>
          <p className='text-gray-600'>
            Cukup ketikkan perintah teks, dan AI canggih kami akan menghasilkan gambar berkualitas tinggi dalam hitungan detik. Dari visual produk hingga desain karakter dan potret, bahkan konsep yang belum ada bisa divisualisasikan dengan mudah. Didukung teknologi AI terkini, kemungkinan kreatifnya tak terbatas!
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description
