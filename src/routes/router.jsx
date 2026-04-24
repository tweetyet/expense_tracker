import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../public/components/PublicLayout";
import NotFound from "../components/NotFound";
import publicRoute from "./publicRoute";

const router = createBrowserRouter([
  {
    path: "/",errorElement:<NotFound/>,
    element: <PublicLayout/>,
    children: [...publicRoute],
   
  }
]);

export default router;
