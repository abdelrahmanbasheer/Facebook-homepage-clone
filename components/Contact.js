import Image from 'next/image'
import React from 'react'

const Contact = ({src,name}) => {
  return (
    <div className='flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl'>
        <Image className='rounded-full' objectFit='cover' src={src} width={50} height={50} layout="fixed"></Image>
        <p>{name}</p>
    </div>
  )
}

export default Contact