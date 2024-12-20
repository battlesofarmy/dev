import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './Components/Pages/Contact.jsx';
import About from './Components/Pages/About.jsx';
import Home from './Components/Pages/Home/Home.jsx';
import SinglePromise from './Components/Pages/Home/SinglePromise.jsx';

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
        path: "/about",
        element: <About />
      },{
        path: "/contact",
        element: <Contact/>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)