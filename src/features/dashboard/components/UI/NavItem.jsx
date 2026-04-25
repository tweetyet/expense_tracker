
const NavItem = ({
    icon:Icon,label,tabName,activeTab,onTabClick,notifications
}) => {

    const isActive = activeTab === tabName
    const baseClasses = "flex items-center space-x-3 p-2 rounded-lg cursor-pointer font-serif shadow-md"
    const activeClasses = "bg-[#C1DBE8] text-[#43302E]"
    // const inactiveClasses = "text-[#43302E]/60 hover:bg-[#FFF1b5]/60 hover:text-[#43302E] transition-colors duration-200 ease-in-out"
    const inactiveClasses = "text-zinc-500 hover:text-[#43302E] hover:bg-[#FFF1B5]/60 transition-colors duration-200 ease-in-out"
    const finalTabName = tabName ==="Help & Support" ? "Help & Support" : label
  return (
   <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    onTabClick(finalTabName);
  }}
  className={`${baseClasses} ${
    isActive ? activeClasses : inactiveClasses
  } group`}
>
  <Icon
    size={20}
    className={
      isActive
        ? "text-[#43302E]"
        : "text-[#43302E]/60 group-hover:text-[#43302E]"
    }
  />

  <span className="flex-1 text-sm font-medium">
    {label}
  </span>

  {notifications && (
    <span
      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
        isActive
          ? "bg-orange-400 text-[#43302E]"
          : "bg-orange-500 text-white"
      }`}
    >
      {notifications}
    </span>
  )}
</a>
  )
}

export default NavItem
