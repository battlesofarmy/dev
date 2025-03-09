import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/details/details-pages/About.jsx';
import Home from './pages/home/Home.jsx';
import SinglePromise from './pages/Home/componenets/SinglePromise.jsx';
import Projects from './pages/projects/Projects.jsx';
import Skills from './pages/details/details-pages/Skills.jsx';
import Education from './pages/details/details-pages/Education.jsx';
import Exprience from './pages/details/details-pages/Exprience.jsx';
import Details from './pages/details/DetailsStructure.jsx';
import Achivements from './pages/details/details-pages/Achivements.jsx';
import Ecommerce from './pages/home/projects-carts/Ecommerce.jsx';
import LandingPage from './pages/home/projects-carts/LandingPage.jsx';
import Others from './pages/home/projects-carts/Others.jsx';
import Wordpress from './pages/home/projects-carts/Wordpress.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>, 
    children: [
      {
        path: "/",
        element: <Home />
      },{
        path: "/projects",
        element: <Projects/>, 
      },{
        path: "/promises/:id",
        element: <SinglePromise/>,
        loader: ()=> fetch('/service-promises.json')
      },{
        path: "/projects/111",
        element: <Ecommerce/>,
      },{
        path: "/projects/112",
        element: <Wordpress/>,
      },{
        path: "/projects/113",
        element: <LandingPage/>,
      },{
        path: "/projects/114",
        element: <Others/>,
      }
    ],
  },
  {
    path: "/details",
    element: <Details/>, 
    children: [
      {
        path: "/details/about",
        element: <About />
      },{
        path: "/details/skills",
        element: <Skills />
      },{
        path: "/details/exprience",
        element: <Exprience />
      },{
        path: "/details/education",
        element: <Education />
      },{
        path: "/details/acivements",
        element: <Achivements />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)