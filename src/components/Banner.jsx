import React from 'react'
import Typed from 'react-typed';

export default function Banner() {
  return (
    <div className='bg-[#079992] font-bold w-full py-10'>
        <div className='max-w-[1240px] mx-auto text-center'>
            <div className='text-xl md:text-3xl m-4'>Learn with us</div>
            <div className='text-white text-[40px] md:text-[60px] m-4'>Grow More Faster</div>
            <div className='text-white text-[20px] md:text-[40px] m-4'>
                Start Learning
                <Typed className='pl-2'
                    strings={['React','Next','Redux','TypeScript','Tailwind CSS','Node','Express','MongoDB']}
                    typeSpeed={100}
                    backSpeed={50}
                    loop={true}
                    
                />
            </div>
        </div>
    </div>
  )
}
