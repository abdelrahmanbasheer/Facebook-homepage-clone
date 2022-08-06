const contacts=[
    {
        src:"https://links.papareact.com/f0p",name:"Jeff Manga"
    },
    {
        src:"https://links.papareact.com/kxk",name:"Elon Manga"
    },
    {
        src:"https://links.papareact.com/zvy",name:"Bill Manga"
    },
    {
        src:"https://links.papareact.com/snf",name:"Mark Manga"
    },
    {
        src:"https://links.papareact.com/d0c",name:"Hary Manga"
    },
    {
        src:"https://links.papareact.com/6gg",name:"Lil Manga"
    },
    {
        src:"https://links.papareact.com/r57",name:"James Manga"
    },

]
import React from 'react'
import {
    SearchIcon
}from "@heroicons/react/outline"
import{
    DotsHorizontalIcon,
    VideoCameraIcon,
}from "@heroicons/react/solid"
import Contact from './Contact'
const Widgets = () => {
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
<div className='flex justify-between items-center text-gray-500 mb-5'>
    <h2 className='text-xl'>Contacts</h2>
    <div className='flex space-x-2'>
        <VideoCameraIcon className='h-6'></VideoCameraIcon>
        <SearchIcon className='h-6'></SearchIcon>
        <VideoCameraIcon className='h-6'></VideoCameraIcon>
    </div>
</div>
{contacts.map(contact=>(
    <Contact key={contact.src} src={contact.src} name={contact.name}></Contact>
))}
    </div>
  )
}

export default Widgets