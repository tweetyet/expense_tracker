import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../public/components/PublicLayout";
import NotFound from "../components/NotFound";
import publicRoute from "./publicRoute";
import authRoute from "./authRoute";
import dashBoardRoute from "./dashboardRoute";

const router = createBrowserRouter([
  {
    path: "/",errorElement:<NotFound/>,
    element: <PublicLayout/>,
    children: [...publicRoute],
   
    
   
  }, 
  ...authRoute,
  ...dashBoardRoute
]);

export default router;
