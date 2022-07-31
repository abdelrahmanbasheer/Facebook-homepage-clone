

const HeadIcon = ({Icon,active}) => {
  return (
    <div className="flex items-center cursor-pointer md:px-10 sm: h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
        <Icon className={`group-hover:text-blue-500 text-center mx-auto h-5 text-gray-500 ${active &&"text-blue-500"}`}></Icon>
    </div>
  )
}

export default HeadIcon