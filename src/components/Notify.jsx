import React from 'react'
import Typed from 'react-typed';

export default function Notify() {
  return (
    <div className='bg-[#079992] w-full p-4'>
        <div className='max-w-[1240px] mx-auto py-[40px] md:flex justify-between'>
            <div className=''>
                <h2 className='text-[20px] md:text-[40px] text-white font-bold'>Want to learn latest skills?</h2>
                <p className='text-white'>Sign up and stay up to date!</p>
            </div>
            <div className='mt-2'>
                <Typed
                strings={[
                    'Enter your email',
                    'Lets keep you updated'
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                    <input type="text"  className='p-1 md:p-3 mr-4 mb-3 text-slate-600 rounded'/>
                </Typed>
                <button className='bg-black text-white p md:p-3 rounded'>Get Started</button>
                <br />
                <p className='text-white'>Thanks for being with us!</p>
            </div>
        </div>
    </div>
  )
}
