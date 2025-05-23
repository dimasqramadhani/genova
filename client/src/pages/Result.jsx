import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  const { generateImage } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (input) {
      const image = await generateImage(input);
      if (image) {
        setIsImageLoaded(true);
        setImage(image);
      }
    }

    setLoading(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={onSubmitHandler}
      className='mt-15 flex flex-col min-h-[90vh] justify-center items-center px-4'
    >
      <div className='w-full max-w-sm sm:max-w-md md:max-w-lg'>
        <div className='relative'>
          <img src={image} alt="" className='w-full rounded' />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-purple-500 ${
              loading ? 'w-full transition-all duration-[10s]' : 'w-0'
            }`}
          />
        </div>
        <p className={`${!loading ? 'hidden' : 'text-center text-gray-500 mt-2'}`}>Loading...</p>
      </div>

      {!isImageLoaded && (
        <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder='Deskripsikan gambar yang ingin kamu buat'
            className='flex-1 bg-transparent outline-none px-4 py-2 sm:py-3 text-sm placeholder-white text-ellipsis'
          />
          <button
            type='submit'
            className='bg-zinc-900 px-6 sm:px-10 py-2 sm:py-3 rounded-full cursor-pointer text-xs sm:text-sm whitespace-nowrap'
          >
            Ciptakan
          </button>
        </div>
      )}

      {isImageLoaded && (
        <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
          <p
            onClick={() => { setIsImageLoaded(false) }}
            className='bg-transparent border border-zinc-900 text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full cursor-pointer text-xs sm:text-sm whitespace-nowrap'
          >
            Ciptakan Lagi
          </p>
          <a
            href={image}
            download="genova-generated-image.png"
            className='bg-zinc-900 px-6 sm:px-10 py-2 sm:py-3 rounded-full cursor-pointer text-xs sm:text-sm whitespace-nowrap'
          >
            Unduh
          </a>
        </div>
      )}
    </motion.form>
  );
};

export default Result;
