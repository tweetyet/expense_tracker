import { lazy } from 'react';
// import HomePage from '../public/pages/HomePage';
// import AboutUsPage from '../public/pages/AboutUsPage';
// import ContactUsPage from '../public/pages/ContactUsPage';

const HomePage = lazy(() => import("../public/pages/HomePage"));
const AboutUsPage = lazy(() => import("../public/pages/AboutUsPage"));
const ContactUsPage = lazy(() => import("../public/pages/ContactUsPage"));
const publicRoute = [
     {
        index:true,
        element: <HomePage/>
      },
      {
        path:'about-us',
        element: <AboutUsPage/>
      },
      {
        path:'contact-us',
        element: <ContactUsPage/>
      },
    
]

export default publicRoute
