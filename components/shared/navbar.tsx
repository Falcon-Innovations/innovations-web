import Link from 'next/link'
import React from 'react'

import {Button} from 'components/Button/Button'
const Navbar = () => {
    return (
        <nav className='w-full  flex items-center justify-between py-4'>
            <Link href='/' className=''>
                <h1 className="font-bold text-2xl">
                    Falcon<span className='text-blue-600'>Innovations</span>
                </h1>
            </Link>
            <div className='flex items-center justify-between gap-16'>
                <Link href='/'>
                    Home
                </Link>
                <Link href='/about'>
                    About
                </Link>
                <Link href='/servicess'>
                    Services
                </Link>
                <Link href='/projects'>
                    Projects
                </Link>
                <Button href="/" intent='primary'>Contact</Button>
            </div>
        </nav>
    )
}

export default Navbar