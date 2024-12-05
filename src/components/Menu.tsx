'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Menu = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className=''>
    <Image
    src = '/menu.png'
    alt='menu'
    height={28}
    width={28}
    className='cursor-pointer'
    onClick={() => setOpen((prev) => !prev)}
    />{
        open && (
        <div>
            <Link href="/">Home</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Logout</Link>
            <Link href="/">Cart(2)</Link>
        </div>
  )
    }
    </div>
  )
}

export default Menu