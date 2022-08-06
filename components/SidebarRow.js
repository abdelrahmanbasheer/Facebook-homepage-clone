import React from 'react'

const SidebarRow = ({Icon,title}) => {
  return (
    <div className='flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer'> 
        {Icon && (
            <Icon className="w-8 h-8 text-blue-500"></Icon>
        )}
        <p className='hidden sm:inline-flex font-medium'>{title}</p>
    </div>
  )
}

export default SidebarRow