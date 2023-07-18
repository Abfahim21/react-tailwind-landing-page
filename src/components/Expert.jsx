import React from 'react'
import laptop from '../assets/images/laptop.jpg'

export default function Expert() {
  return (
    <div className='max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2'>
        <div className='col-span-1 md:w-[80%] text-center'>
            <img src={laptop} alt="Computer" />
        </div>
        <div className='col-span-1 flex flex-col justify-center'>
            <h1 className='text-[#079992] font-bold my-2'>
                LEARN FROM EXPERTS
            </h1>
            <p className='my-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem.
            </p>
            <button className='w-[30%] bg-black text-white p-3 rounded'>Start Learning</button>
        </div>
    </div>
  )
}
