import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  
}from "@heroicons/react/outline"
import {
CalendarIcon,
ClockIcon,
DesktopComputerIcon,
UsersIcon,
EmojiHappyIcon,
}from "@heroicons/react/solid"
import SidebarRow from "./SidebarRow"
const Sidebar = () => {

  return (
    <div className="p-2 mt-5 max-w-{600px} xl:min-w-{300px}">
      <SidebarRow Icon={EmojiHappyIcon}></SidebarRow>
      <SidebarRow Icon={UsersIcon} title="Friends"></SidebarRow>
      <SidebarRow Icon={UserGroupIcon} title="Groups"></SidebarRow>
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace"></SidebarRow>
      <SidebarRow Icon={DesktopComputerIcon} title="Watch"></SidebarRow>
      <SidebarRow Icon={CalendarIcon} title="Events"></SidebarRow>
      <SidebarRow Icon={ClockIcon} title="Memories"></SidebarRow>
      <SidebarRow Icon={ChevronDownIcon} title="See More"></SidebarRow>
      </div>
  )
}

export default Sidebar