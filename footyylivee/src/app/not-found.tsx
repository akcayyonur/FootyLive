import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import 'boxicons/css/boxicons.min.css'
import '../styles/floaty.css'

export default function NotFound() {

  return (
    <main className="text-center">
      <div>
        <h2 className='text-3xl text-white'>There was a problem.</h2>
        <p className='text-white py-2'>We could not find the page you were looking for.</p>
      </div>
      <Image 
          src="/ghost-img.png" 
          alt='logo' 
          width={350} 
          height={350} 
          className="floaty-animation" 
        />
        <Link href="/" passHref>
          <button className='text-teal-400 bg-[rgb(40,46,58)] px-4 py-2 rounded'>
          <i className='bx bx-chevron-left bx-flashing text-teal-400 mr-2' style={{ fontSize: '24px' }}>Back To FootyLive</i>
          </button>
        </Link>
    </main>   
  )
}


