import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useCookie from "react-use-cookie";
import useUserStore from "../../../stores/useUserStore";
import SideBar from "./SideBar";
import MainContent from "../../../features/dashboard/components/MainContent";
import RightPanel from "../../../features/dashboard/components/RightPanel";
import AccountsExample from "./AccountsExample";

const DashboardLayout = ({ onLogout }) => {
  const [token] = useCookie("my_token");
  const [userCookie] = useCookie("user");
  const { setUser } = useUserStore();
  const [activeTab, setActiveTab] = useState("Dashboard");

  useEffect(() => {
    if (userCookie) {
      setUser(JSON.parse(userCookie));
    }
  }, [userCookie, setUser]);

  if (!token) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-white flex">

      {/* LEFT SIDEBAR */}
      <div className="w-64 bg-white p-6 shadow-md hidden md:block flex-shrink-0">
        <SideBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onLogout={onLogout}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 px-4 py-6 md:px-8 lg:px-12">
        {activeTab === "Dashboard" && <MainContent />}
        {activeTab === "Accounts" && <AccountsExample />}
      </div>

      {/* RIGHT PANEL */}
      <div className="w-80 bg-white p-4 shadow-md hidden xl:block flex-shrink-0">
        <RightPanel />
      </div>

    </div>
  );
};

export default DashboardLayout;