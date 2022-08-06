import Image from "next/image"
import{
BellIcon,
ChatIcon,
ChevronDownIcon,
HomeIcon,
UserGroupIcon,
ViewGridIcon,
EmojiHappyIcon,
} from "@heroicons/react/solid"
import {
FlagIcon,
PlayIcon,
SearchIcon,
ShoppingCartIcon,
} from "@heroicons/react/outline"
import HeadIcon from "./HeadIcon.js"
const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
        {/*left-side*/}
        <div className="flex items-center">
<Image 
src="https://links.papareact.com/5me"
 width={40} height="40" layout="fixed"
 ></Image>
 <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
<SearchIcon className="h-6 text-gray-600"></SearchIcon>
  <input className=" hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500" placeholder="Search Facebook"></input>
 </div>
        </div>

        <div className="flex justify-center flex-grow">
          <div className="flex space-x-6 md:space-x-2 ">
<HeadIcon active Icon={HomeIcon}></HeadIcon>
<HeadIcon Icon={FlagIcon}></HeadIcon>
<HeadIcon Icon={PlayIcon}></HeadIcon>
<HeadIcon Icon={ShoppingCartIcon}></HeadIcon>
<HeadIcon Icon={UserGroupIcon}></HeadIcon>
          </div>
        </div>
      <div className="flex items-center sm:space-x-2 justify-end">
       <EmojiHappyIcon className="icon"></EmojiHappyIcon>
        <p className="font-semibold pr-3 whitespace-nowrap capitalize">the userName</p>
        <ViewGridIcon className="icon"></ViewGridIcon>
        <ChatIcon className="icon"></ChatIcon>
        <BellIcon className="icon"></BellIcon>
        <ChevronDownIcon className="icon"></ChevronDownIcon>
      </div>
    </div>
  )
}

export default Header