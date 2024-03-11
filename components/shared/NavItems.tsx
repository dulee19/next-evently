"use client"

import React from 'react'
import Link from 'next/link'
import { headerLinks } from '@/constants'
import { usePathname } from 'next/navigation'

const NavItems = () => {
    const pathname = usePathname();

  return (
    <ul className='md:flex-between flex gap-5 w-full flex-col items-start md:flex-row'>
        {headerLinks.map((link, index) => {
            const isActive = pathname === link.route

            return (
                <li key={index}>
                    <Link 
                        href={link.route}
                        className={`${isActive && 'text-primary'} flex-center p-medium-16 whitespace-nowrap`}
                    >
                        {link.label}
                    </Link>
                </li>
            )
        })}
    </ul>
  )
}

export default NavItems