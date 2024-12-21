import SocalIcons from "../../Global/SocialIcons";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { Link, Outlet, useLocation} from 'react-router-dom'
import profilePic from '../../../assets/profile.jpeg'
import Navbar from "../../Global/Navbar";
import Footer from "../../Global/Footer";

export default function Details() {
    const title = useLocation().pathname.split('/').pop();
  return (
    <>
    <Navbar/>
      <section className="my-12">
        <div className="container">
          <div className="md:grid grid-cols-12 gap-10">
            {/* Left Side  */}
            <div style={{background: '#111827'}} className="md:col-span-3 col-span-5 p-10 md:sticky top-10 h-screen">
              <img src={profilePic} alt="Muntasir Profile Pic" />
              <h2 className="text-2xl text-white mt-5">Muntasir Ahmed</h2>
              <SocalIcons/>
              <hr className="my-5 h-[2px] bg-gradient-to-r from-red-500 to-blue-500 border-0" />
              {/* Email and location */}
              <div>
                {/* Email  */}
                <h4 className="text-xl text-gray-600 font-medium mb-2">Email</h4>
                <div className="flex text-white -center items-center gap-2">
                  <MdEmail className="text-xl"/>
                  <p className=""><Link to='mailto:maf107714@gmail.com'>muntasir22@gma...</Link></p>
                </div>
                {/* Location  */}
                <h4 className="text-xl text-gray-600 font-medium mb-2 mt-5">Location</h4>
                <div className="flex text-white -center items-center gap-2">
                  <ImLocation2 className="text-xl"/>
                  <p className="">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
            {/* Right Side  */}
            <div  style={{background: '#111827'}} className="md:col-span-9 col-span-7 p-10">
              <h2 className="text-2xl text-white capitalize">{title}</h2>
              <hr className="my-5 h-[2px] bg-gradient-to-r from-red-500 to-blue-500 border-0" />
              <div className="text-gray-300">
                <Outlet/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
