"use client"
import React from 'react'
import { useState, useEffect } from 'react'
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
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
            setPrevScrollPos(currentScrollPos)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [prevScrollPos])
 
    return ( 
        <nav className={`fixed mx-auto border-[#33353F] top-0 left-0 right-0 z-10 p-2 bg-[#121212] bg-opacity-90 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className='flex items-center justify-between mx-auto py-3 sm:px-8 px-2 mb-4  rounded-full '>
                <Link href={'/'}
                className='text-2xl md:text-4xl font-semibold'
                >
                <svg 
                    width="32" 
                    height="24" 
                    viewBox="0 0 32 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Laptop screen */}
                    <rect 
                        x="4" 
                        y="2" 
                        width="24" 
                        height="16" 
                        stroke="currentColor" 
                        strokeWidth="1.5"
                        rx="2"
                    />
                    {/* Laptop base */}
                    <path
                        d="M2 20L30 20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />
                    {/* Laptop bottom */}
                    <path
                        d="M0 22L32 22"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />
                </svg>

                </Link>
                <div className='block md:hidden mobile-menu'>
                    {
                        !navBarOpen ? (
                            <button onClick={()=> setNavBarOpen(true)} className='flex text-slate-200 items-center px-3 py-2   hover:text-white hover:border-white '>
                                <Bars3Icon className='h-5 w-5'/>
                            </button>
                        ) : (
                            <button onClick={()=> setNavBarOpen(false)} className='flex text-slate-200 items-center px-3 py-2 hover:text-white hover:border-white '>
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
                                        <a 
                                            href={link.path}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const element = document.querySelector(link.path);
                                                element?.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
                                        >
                                            {link.title}
                                        </a>
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
