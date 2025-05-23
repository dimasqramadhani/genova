import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion'
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {

  const [state, setState] = useState('Masuk');
  const {setShowLogin, backendUrl, setToken, setUser} = useContext(AppContext)
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      
      if(state === "Masuk") {
        const {data} = await axios.post(backendUrl + '/api/user/login', {email, password})

        if(data.success) {
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)
          setShowLogin(false)
        }else {
          toast.error(data.message)
        }
      }else {
        const {data} = await axios.post(backendUrl + '/api/user/register', {name, email, password})

        if(data.success) {
          setToken(data.token)
          setUser(data.user)
          localStorage.getItem('token', data.token)
          setShowLogin(false)
        }else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
        document.body.style.overflow = 'unset';
    }
  },[])
 
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      
      <motion.form
        onSubmit={onSubmitHandler}
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='relative bg-white p-6 sm:p-10 rounded-xl text-slate-500 w-[90%] max-w-md mx-auto'
      >
        <h1 className='text-center text-xl sm:text-2xl text-neutral-700 font-medium'>{state}</h1>
        <p className='text-xs sm:text-sm text-center mt-2'>Selamat Datang! Masuk untuk melanjutkan</p>

        {state !== 'Masuk' && (
          <div className='border px-5 py-2 flex items-center gap-2 rounded-full mt-5'>
            <img src={assets.profile_icon} alt="" width={21} />
            <input
              onChange={e => setName(e.target.value)}
              value={name}
              type="text"
              placeholder='Nama Lengkap'
              required
              className='outline-none text-sm w-full bg-transparent'
            />
          </div>
        )}

        <div className='border px-5 py-2 flex items-center gap-2 rounded-full mt-4'>
          <img src={assets.email_icon} alt="" />
          <input
            onChange={e => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder='Email'
            required
            className='outline-none text-sm w-full bg-transparent'
          />
        </div>

        <div className='border px-5 py-2 flex items-center gap-2 rounded-full mt-4'>
          <img src={assets.lock_icon} alt="" />
          <input
            onChange={e => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder='Password'
            required
            className='outline-none text-sm w-full bg-transparent'
          />
        </div>

        <p className='text-sm text-purple-500 my-4 cursor-pointer text-right'>Lupa Password?</p>

        <button className='bg-purple-500 w-full text-white py-2 rounded-full cursor-pointer text-sm sm:text-base'>
          {state === 'Masuk' ? 'Masuk' : 'Buat Akun'}
        </button>

        {state === 'Masuk' ? (
          <p className='mt-5 text-center text-sm'>
            Belum memiliki akun?{' '}
            <span className='text-purple-500 cursor-pointer' onClick={() => setState('Daftar')}>Buat Akun</span>
          </p>
        ) : (
          <p className='mt-5 text-center text-sm'>
            Sudah memiliki akun?{' '}
            <span className='text-purple-500 cursor-pointer' onClick={() => setState('Masuk')}>Masuk</span>
          </p>
        )}

        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt=""
          className='absolute top-4 right-4 sm:top-5 sm:right-5 cursor-pointer w-5 h-5 sm:w-6 sm:h-6'
        />
      </motion.form>

    </div>
  )
}

export default Login
