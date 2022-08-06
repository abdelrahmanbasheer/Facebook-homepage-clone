import Image from 'next/image'
import React from 'react'
import {
  ChatAltIcon,ShareIcon,ThumbUpIcon
}from "@heroicons/react/outline"
const Post = ({name,message,email,postImage,image,timestamp}) => {
 console.log(name)
    return (
    <div className='flex flex-col'>
       <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm'>
        <div className='flex items-center space-x-2'>
            <Image className='rounded-full' src={image} width={40} height={40}></Image>
        </div>
        <div><p className='font-medium'>{name}</p>
        <p className='text-xs text-gray-400'>{new Date(timestamp?.toDate()).toLocaleString()}</p>
        </div>
        <p className='pt-4'>{message}</p>
        {postImage && (
        <div className='relative h-56 md:h-96 bg-white mt-2'>
            <Image src={postImage}  blurDataURL={postImage} objectFit="cover"layout='fill'></Image>
        </div>
       )}
       </div>
      <div className='flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t'>
        <div  className='inputIcon'>
          <ThumbUpIcon className='h-4'></ThumbUpIcon>
          <p className='text-xs sm:text-base'>Like</p>
        </div>
        <div className='inputIcon'>
        <ChatAltIcon className='h-4'></ChatAltIcon>
          <p className='text-xs sm:text-base'>Comment</p>
        </div>
        <div className='inputIcon'>
        <ShareIcon className='h-4'></ShareIcon>
          <p className='text-xs sm:text-base'>Share</p>
        </div>
      </div>
    </div>
  )
}

export default Post