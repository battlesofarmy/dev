import SectionTitle from "../../Components/SectionTitle";
import Card from "@/src/pages/Home/componenets/Cart";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { VscLayersActive } from "react-icons/vsc";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import CPImg from "@/src/assets/problem-solving-skills.png";
import CPExprience from "@/src/Components/CPExprience";
import bn from '/banner-image.jpg?url'

import { Parallax } from 'react-parallax';


export default function Home() {
  const [promises, setPromises] = useState();
  const [applications, setApplications] = useState();
  const [projects, setProjects] = useState();

  const IconMap = {
    FaCode: FaCode,
    FaUser: FaUser,
    RiSecurePaymentFill: RiSecurePaymentFill,
    VscLayersActive: VscLayersActive,
    FaMoneyBillTrendUp: FaMoneyBillTrendUp,
  };

  // Fetch data for home page
  useEffect(() => {
    fetch("service-promises.json")
      .then((res) => res.json())
      .then((data) => setPromises(data));

    fetch("applications.json")
      .then((res) => res.json())
      .then((data) => setApplications(data));

    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <>
    {/* Banner Section  */}
    {/* <section style={{background: `url(${bn})no-repeat`, backgroundSize: 'cover'}}>
      <div className="container h-[80vh] text-white bg-black bg-opacity-60 flex justify-center items-center text-center">
          <div>
             <h2 className="text-5xl mb-12">Do you want to See a Quality?</h2>
             <Link to='/projects' className="px-8 py-3 bg-gradient-to-r from-secondary text-lg font-medium hover:bg-gradient-to-l">Yes, Show Me</Link>
          </div>
        </div>
    </section> */}


    {/* Banner Section with peralex effect */}
    <Parallax bgImage={bn} strength={500}>
      <div className="container h-[50vh] md:h-[80vh] flex justify-center items-center text-center text-white bg-black bg-opacity-60">
        <div>
          <h2 className="text-5xl mb-12">Do you want to See a Quality?</h2>
          <Link
            to="/projects"
            className="px-8 py-3 bg-gradient-to-r from-secondary text-lg font-medium hover:bg-gradient-to-l">
            Yes, Show Me
          </Link>
        </div>
      </div>
    </Parallax>


    <img src="blob:chrome-extension://dbjbempljhcmhlfpfacalomonjpalpko/f95ac4b5-65a1-4e72-a64f-a8bfdd47f2be" alt="" />

      {/* Services promises  */}
      <section id="dev_services" className="lg:py-20 py-12">
        <div className="container">
          {/* Title  */}
          <div className="pb-8 text-center">
            <SectionTitle title={"Five Service Promises"} />
          </div>
          {/* Promises icon items  */}
          <div
            className="grid place-items-cener md:grid-cols-2 lg:grid-cols-5"
            id="dev_services"
          >
            {promises?.map((ele, i) => {
              const GetIcon = IconMap[ele.icon];
              console.log(ele.icon);
              return (
                <Link
                  to={`/promises/${i + 1}`}
                  key={i}
                  className="text-center m-4 shadow py-[3.125rem] px-5 icon-item"
                >
                  <div className="">
                    <div className="text-[3rem] icon text-gray-900">
                      {GetIcon ? <GetIcon /> : null}{" "}
                    </div>
                    <h2 className="text-2xl text-gray-800 mt-4 z-50 font-semibold">
                      {ele.title}
                    </h2>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Applications   */}
      <section className="pb-20 pt-10" id="dev_products">
        <div className="container">
          {/* Title  */}
          <div className="pb-6 text-center">
            <SectionTitle title={"Applications"} />
          </div>
          {/* Cart Items  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-5">
            {applications?.map((ele) => (
              <Card key={ele.id} ele={ele}></Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Design  */}
      <section className="py-6 text-white">
        <div className="container">
          <div className="md:grid md:grid-cols-2 items-center py-8 rounded-lg bg-primary">
            <div className="lg:pl-12 pl-5 pr-5 lg:pr-0 pb-12 md:pb-0">
              <h2 className="text-4xl text-secondary mb-5 font-semibold">
                Problem Solving Experiences
              </h2>
              <div className="text-lg">
                <CPExprience />
              </div>
            </div>
            <div>
              <img src={CPImg} className="" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* projects cart  */}
      <section className="lg:py-20 py-12" id="dev_products">
        <div className="container">
          {/* Title  */}
          <div className="pb-6 text-center">
            <SectionTitle title={"Projects"} />
          </div>
          {/* Cart Items  */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 pt-5">
            {projects?.map((ele) => (
              <Card key={ele.id} ele={ele} btn={1}></Card>
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
}
