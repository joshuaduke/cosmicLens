import { Telescope } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <div>
          <Link href={"/"} className='flex items-center gap-2 text-xl font-semibold'>
            <Telescope />
          </Link>
            
        </div>
    </nav>
  )
}
