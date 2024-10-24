import Link from 'next/link'
import React from 'react'

const Navlink = ({ href, title }: any) => {
  return (
    <div>
        <Link href={href}
            className='block py-2 pl-3 pr-4 sm:text-xl hover:text-white rounded md:p-0 text-[#ADB7BE]'
                        >
            {title}
        </Link>
    </div>
  )
}

export default Navlink