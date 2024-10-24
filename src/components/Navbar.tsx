"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Navlink from './Navlink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'
import MenuOverlay from './MenuOverlay'

const navLinks = [
    {
        path: "#about",
        title: "About"
    },
    {
        path: "#projects",
        title: "Projects"
    },
    {
        path: "#contact",
        title: "Contact"
    },
    
]

function Navbar() {

    const [navBarOpen, setNavBarOpen] = useState(false)
 
  return ( 
    <nav className='fixed mx-auto border-[#33353F] top-0 left-0 right-0 z-10 p-2 bg-[#121212] bg-opacity-90'>
        <div className='flex items-center justify-between mx-auto py-3 sm:px-8 px-2 mb-4  rounded-full '>
            <Link href={'/'}
            className='text-2xl md:text-4xl font-semibold'
            >LOGO</Link>
            <div className='block md:hidden mobile-menu'>
                {
                    !navBarOpen ? (
                        <button onClick={()=> setNavBarOpen(true)} className='flex text-slate-200 items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white '>
                            <Bars3Icon className='h-5 w-5'/>
                        </button>
                    ) : (
                        <button onClick={()=> setNavBarOpen(false)} className='flex text-slate-200 items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white '>
                            <XMarkIcon className='h-5 w-5'/>
                        </button>
                    )
                }
            </div>
            <div className='menu hidden md:block md:w-auto ' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <Navlink href={link.path} title={link.title}/>
                                </li>
                            ))
                        }
                </ul>
            </div>
        </div>
        {navBarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar

