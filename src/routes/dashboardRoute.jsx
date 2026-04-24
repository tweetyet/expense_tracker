

const dashBoardRoute = {
    path: "/dashboard",
        element: <DashboardLayout/>,
   children: [
            {
                index: true,
                element: <DashboardPage/>

}
export default dashBoardRoute;