import{ useEffect, useState } from 'react'
import { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import PageLoading from '../../../components/PageLoading'
import { Toaster } from 'react-hot-toast'
import useCookie from 'react-use-cookie'
import useUserStore from '../../../stores/useUserStore'
import SideBar from './SideBar'
import MainContent from '../../../features/dashboard/components/MainContent'
import RightPanel from '../../../features/dashboard/components/RightPanel'
import AccountsExample from './AccountsExample'

const DashboardLayout = ({onLogout}) => {
    const [token]= useCookie("my_token");
    const[userCookie]= useCookie("user");
    const{user,setUser}= useUserStore();
    const [activeTab,setActiveTab]= useState("Dashboard");

    useEffect(()=>{
        setUser(JSON.parse(userCookie));

    },[]);
    if(!token){
        return <Navigate to="/"/>;
    }


  return (
   <div className='min-h-screen bg-gray-100 flex'>
    <div className='w-64 bg-white p-6 shadow-md hidden md:block'>
<SideBar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={onLogout}/>
    </div>

    <div className='flex-1 p-2 container md:p-6 lg:p-10 max-w-5xl md:mx-auto'>
      {activeTab === "Dashboard" && <MainContent/>}
      {activeTab === "Accounts" && <AccountsExample/>}

    </div>

    <div className='w-80 bg-white p-4 shadow-md hidden xl:block'>
<RightPanel/>
    </div>
    
   </div>
  )
}

export default DashboardLayout
