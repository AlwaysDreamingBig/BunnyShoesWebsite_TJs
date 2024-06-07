import React from 'react'

const Buttons = ({label, iconURL}) => {
  return (
    <button className='flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-montserrat text-base leading-none border-coral-red py-3 px-5 gap-2 rounded-full hover:from-pink-500 hover:to-indigo-500'>
        {label}

        <img src={iconURL} alt='arrrow right icon' className='ml-2 rounded-full w-5 h-5'/>
    </button>
  )
}

export default Buttons