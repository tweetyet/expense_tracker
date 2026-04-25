
// import DashboardLayout
// const dashBoardRoute = [
//     {
//         path: "/dashboard",
//         element: <DashboardLayout/>,
//         children: [
//             {
//                 index: true,
//                 element: <DashboardPage/>

import DashboardLayout from "../features/dashboard/components/DashboardLayout";
import DashboardPage from "../features/dashboard/pages/DashboardPage";

//             },
//         ]
// }]
// export default dashBoardRoute


const dashBoardRoute = [
    {
        path:"/dashboard",
        element: <DashboardLayout/>,
        children:[
            {
                index:true,
                element:<DashboardPage/>
            },

        ]
    }
]
export default dashBoardRoute;