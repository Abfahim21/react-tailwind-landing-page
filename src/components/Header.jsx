import React from 'react'

export default function Header() {
  return (
    <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1240px] py-[20px] border items-center flex justify-between border-black mx-auto'>
            <div className='text-3xl font-bold'>
                Abrar Fahim
            </div>
            <ul className='flex text-white gap-10'>
            <li>
                Home
            </li>
            <li>
                Company
            </li>
            <li>
                About
            </li>
            <li>
                Resources
            </li>
            <li>
                Contact
            </li>
        </ul>
        </div>
    </div>
  )
}
