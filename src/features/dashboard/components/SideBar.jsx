import { tabs } from "../../../assets/tabs";
import { DollarSign } from "lucide-react";
import NavItem from "./UI/NavItem";
import Logout from "../../../components/Logout";

const SideBar = ({ activeTab, setActiveTab, onLogout }) => {
  const handleClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div
      className="
        hidden lg:flex flex-col
        w-64 h-[100dvh]
        p-4 gap-4
        bg-white/40 backdrop-blur-xl
        border-r border-white/30
        overflow-y-auto
      "
    >
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-6">
        <div className="bg-[#FFF1B5]/80 p-2 rounded-lg backdrop-blur">
          <img
            src="/trackifyLogo.png"
            className="w-7 h-7 rounded-lg"
            alt="Trackify Logo"
          />
        </div>

        <span className="text-lg font-serif font-semibold text-[#43302E]">
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

      {/* Bottom Section */}
      <div className="mt-auto pt-6 border-t border-white/20 space-y-4">
        
        {/* Logout */}
        <Logout onLogout={onLogout} />

        {/* Premium Card */}
        <div className="flex flex-col items-center text-center p-4 rounded-xl backdrop-blur-lg bg-white/30">
          
          <div className="bg-[#FFF1B5]/70 p-3 rounded-full mb-3">
            <DollarSign size={20} className="text-[#43302E]" />
          </div>

          <p className="text-sm font-serif font-semibold text-[#43302E]">
            Unlock Premium
          </p>

          <p className="text-xs text-[#43302E]/70 mb-3">
            $9.99 / month
          </p>

          <button
            className="
              w-full py-2.5 rounded-lg text-sm font-medium
              bg-[#43302E] text-[#FFF1B5]
              hover:bg-[#FFF1B5] hover:text-[#43302E]
              transition-all duration-200 font-serif
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