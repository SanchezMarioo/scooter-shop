'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function LinkClient({route,texto}) {
    const pathname = usePathname()
    return (
    <Link className={`link ${pathname === route ? 'nav-link active' : 'nav-link'}`} href={route}> 
        {texto}
      </Link>
    )
}
