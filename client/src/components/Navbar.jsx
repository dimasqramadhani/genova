import React, { useContext } from 'react' 
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const { user, setShowLogin, logout } = useContext(AppContext)
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between py-4'>
      <Link to='/'>
        <img src={assets.logo} alt="logo" className='w-28 sm:w-32 lg:w-40' />
      </Link>

      <div>
        {user ? 
          <div className='flex items-center gap-2 sm:gap-3'>
            <p className='text-gray-600 max-sm:hidden pl-4'>Hi, {user.name}</p>
            <div className='cursor-pointer relative group'>
              <img className='w-10 drop-shadow-2xl' src={assets.profile_icon} alt="" />
              <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded-2xl pt-12'>
                <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                  <li onClick={logout} className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                </ul>
              </div>
            </div>
          </div>
          :
          <div className='flex items-center gap-2 sm:gap-5'>
            <button onClick={() => setShowLogin(true)} className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full cursor-pointer'>Login</button>
          </div>        
        }
      </div>
    </div>
  )
}

export default Navbar
