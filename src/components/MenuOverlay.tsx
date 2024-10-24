import React from 'react'
import Navlink from './Navlink'

const MenuOverlay = ({links}:any) => {
    
  return (
    <ul className='flex flex-col py-4 items-center'>
        {links.map((link: any, index: number) => (
                <li key={index}>
                    <Navlink  title={link.title} href={link.path}/>
                </li>
        ))
        }
    </ul>
  )
}

export default MenuOverlay