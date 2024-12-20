import { Outlet } from 'react-router-dom'
import Navbar from './Components/Global/Navbar'
import Footer from './Components/Global/Footer'
import './App.css'


function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
