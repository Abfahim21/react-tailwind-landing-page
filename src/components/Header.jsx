import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import React, { useState } from 'react'

export default function Header() {
    const [toggle, setToggle] = useState(true)
  return (
    <div className='bg-[#079992] p-4'>
        <div className='max-w-[1240px] py-[15px] items-center flex justify-between border-black mx-auto'>
            <div className='text-3xl font-bold'>
                Abrar Fahim
            </div>
            {
                toggle?
                <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-white text-3xl md:hidden block'/>
                :
                <AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-white text-3xl md:hidden block'/>
            }
            <ul className='hidden md:flex text-white gap-10'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Company</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Resources</li>
                <li className='cursor-pointer'>Contact</li>
            </ul>
        {/* Responsive Menu */}
        <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[98px] ${toggle ?'left-[-100%]' : 'left-[0px]'} `}>
            <li className='p-5'>
                Home
            </li>
            <li className='p-5'>
                Company
            </li>
            <li className='p-5'>
                About
            </li>
            <li className='p-5'>
                Resources
            </li>
            <li className='p-5'>
                Contact
            </li>
        </ul>
        </div>
    </div>
  )
}
