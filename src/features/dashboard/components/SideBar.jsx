import { tabs } from "../../../assets/tabs";
import { DollarSign } from "lucide-react";
import React, { useState } from "react";
import NavItem from "./UI/NavItem";
import Logout from "../../../components/Logout";

const SideBar = ({ activeTab, setActiveTab, onLogout }) => {
  const handleClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
  <div
  className=" rounded-xl
  flex flex-col gap-4 p-4 h-screen w-64

  bg-white/40 backdrop-blur-xl
  border-r border-white/30
  ]
"
>
  {/* Logo */}
  <div className="flex items-center space-x-2 mb-8">
    <div className="bg-[#FFF1B5]/80 p-2 rounded-lg backdrop-blur">
     <img src="/trackifyLogo.png" className="size-7 rounded-lg" alt="" />
    </div>

    <span className="text-xl font-serif font-semibold text-[#43302E]">
      Trackify
    </span>
  </div>

  {/* Navigation */}
  <nav className="flex-1 space-y-1">
    {tabs.map((tab) => (
      <NavItem
        key={tab.key}
        activeTab={activeTab}
        onTabClick={handleClick}
        {...tab}
      />
    ))}
  </nav>

  {/* Bottom */}
  <div className="mt-auto pt-6 border-t border-white/20">
    <Logout />

    {/* Premium Card */}
    <div className="flex flex-col items-center justify-center mt-4 p-4 rounded-xl backdrop-blur-lg">
      
      <div className="bg-[#FFF1B5]/70 p-3 rounded-full inline-flex mb-3">
        <DollarSign size={20} className="text-[#43302E] " />
      </div>

      <p className="text-sm font-serif font-semibold text-[#43302E]">
        Unlock Premium
      </p>

      <p className="text-xs font-serif text-[#43302E]/70 mb-3">
        $9.99 / month
      </p>

      <button
        className="
        text-[#FFF1B5] bg-[#43302E] w-full shadow-md hover:text-[#43302E] ease-in hover:bg-[#FFF1B5] focus:ring-4  focus:ring-[#A16207]/30 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2 font-serif
      "
      >
        Explore Plans
      </button>
    </div>
  </div>
</div>

  );
};

export default SideBar;
