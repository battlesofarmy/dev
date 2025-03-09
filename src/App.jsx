import { Outlet, useLocation,  } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './App.css'
import { useEffect } from 'react';


function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
