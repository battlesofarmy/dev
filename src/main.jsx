import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/Pages/About.jsx';
import Home from './Components/Pages/Home/Home.jsx';
import SinglePromise from './Components/Pages/Home/SinglePromise.jsx';
import Projects from './Components/Pages/Projects.jsx';
import Skills from './Components/Pages/Skills.jsx';
import Education from './Components/Pages/Education.jsx';
import Exprience from './Components/Pages/Exprience.jsx';
import Details from './Components/Pages/details/Details.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>, 
    children: [
      {
        path: "/",
        element: <Home />
      },{
        path: "/promises/:id",
        element: <SinglePromise/>,
        loader: ()=> fetch('/service-promises.json')
      },{
        path: "/projects",
        element: <Projects />
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
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)