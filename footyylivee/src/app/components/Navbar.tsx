import Image from 'next/image'
import Link from 'next/link'
import {FC} from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-2'>
        <Link href="/" className='flex items-center space-x-2'>
        <div className='relative w-[40px] h-[40px]'>
            <Image src="/footylive.png" alt='logo' fill className='object-cover' />
        </div>
        <span className='text-2xl font-bold none md:block text-white'>FootyLive
        </span>
        </Link>
    </div>
  )
}

export default Navbar