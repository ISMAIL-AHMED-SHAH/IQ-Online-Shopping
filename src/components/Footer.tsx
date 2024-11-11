import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-blackish text-gray-400 text-center py-4 pb-16 md:pb-4'>
      <div className='flex items-center justify-center gap-4'>
        <Image src="/IQSTORE-BG.png" alt="IQStore Logo" width={100} height={100} />
        <div className='text-left'>
          <div>Copyright © iQ Shop</div>
          <div>All Rights Reserved</div>
          <div className='text-xs text-center'>ISMAIL AHMED SHAH</div>
        </div>
      </div>
    </div>
  )
}

export default Footer

