import Navbar from "../Global/Navbar";
import Footer from "../Global/Footer";
import SingleProjectCart from "../Global/SingleProjectCart";
import { useEffect, useState } from "react";

export default function Projects() {
  const items = [
    {
      name : "All",
      category: "All"
    },{
      name : "Ecommerce",
      category: "ecomerce"
    },{
      name : "Landing Page",
      category: "landing-page"
    },{
      name : "Others",
      category: "others"
    }
  ]
  const [esites, setEsites] = useState();
  
  useEffect(()=>{
      fetch('/All.json')
      .then(res=>res.json())
      .then(data=> setEsites(data))
  },[]);

  const handleItems=(category)=>{
    fetch(`/${category}.json`)
      .then(res=>res.json())
      .then(data=> setEsites(data))

  }

  return (
    <>
    <Navbar/>
      <section className="pt-20">
        <div className="container">
          <div className="flex gap-5">
            {
              items?.map(ele=>
                <p key={ele.category} onClick={()=>handleItems(ele.category)} className="border shadow bg-gray-600 text-white px-4 py-2 rounded-md  cursor-pointer">{ele.name}</p>
              )
            }
          </div>
        </div>
      </section>



       <section className="lg:pb-20 pt-0 pb-10">
            <div className="container">
            {
              esites?.map(ele=>
                 <SingleProjectCart key={ele.id} ele={ele}/>
              )
            }
          </div>
        </section>
      <Footer/>
    </>
  )
}