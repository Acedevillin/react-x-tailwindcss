import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center'>
            <p className='text-[#00df9a] uppercase font-bold p-2'>Growing with Data Analytics</p>
            <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold'>Grow with Data</h1>
            <div className='flex justify-center items-center py-2'>
                <p className='md:text-4xl sm:text-4xl text-xl font-semibold'>Fast, Flexible, Fianacing, for</p>
                <Typed className='md:text-4xl sm:text-4xl text-xl pl-2 text-teal-500 font-semibold' strings={['BTB', 'BTC','SASS']} typeSpeed={120} backSpeed={140} loop/>
            </div>
            <p className='md:text-3xl sm:text-4xl font-normal text-xl text-gray-500'>Monitior your data anlytics to increase sales</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-2xl'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero