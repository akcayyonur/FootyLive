'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

type linkProps = {
    href: string,
    name: string,
    src: string,
}

const LinkSide = ({ href, name, src }: linkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} className={`flex items-center py-2 px-2 rounded-md transition-colors duration-300 ${isActive ? 'bg-glow text-white' : 'hover:bg-[rgb(54,63,78)]'}`}>
            <Image src={src} alt={name} width={25} height={25} className='' />
            <p className={`ml-4 text-xs md:text-sm ${isActive ? 'font-semibold' : ''}`}>{name}</p>
        </Link>
    );
}

export default LinkSide
