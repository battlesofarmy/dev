import SectionTitle from "../../Global/SectionTitle";
import Card from "./Cart";
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { VscLayersActive } from "react-icons/vsc";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

export default function Home() {
  const [promises, setPromises] = useState();
  const IconMap = {
    FaCode: FaCode,
    FaUser: FaUser,
    RiSecurePaymentFill: RiSecurePaymentFill,
    VscLayersActive: VscLayersActive,
    FaMoneyBillTrendUp: FaMoneyBillTrendUp
  }

  useEffect(()=>{
    fetch('service-promises.json')
    .then(res=> res.json())
    .then(data=> setPromises(data))
  },[])
  
  return (
    <>
      {/* Services section  */}

      <section id='dev_services' className='py-20'>
        <div className="container">
            {/* Title  */}
            <div className="pb-8 text-center"><SectionTitle title={"Five Service Promises"}/></div>
            {/* Icon items  */}
            <div className="flex justify-center text-center gap-8 mx-10">
            {/* <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-3 text-center gap-8 mx-10"> */}
                {
                  promises?.map((ele, i)=>{
                    const GetIcon = IconMap[ele.icon];
                    console.log(GetIcon)
                    return(
                   
                      <Link  to={`/promises/${i+1}`} key={i} className="icon-item text-center py-10 w-56">
                        <div className='icon text-5xl'> {GetIcon ? <GetIcon /> : null} </div>
                        <h4 className="text-2xl my-4 font-semibold">{ele.title}</h4>
                      </Link>
                    )
                  })
                }
            </div>


            <br /><br /><br />

            <div className="grid grid-cols-5 gap-10">
              {
                  promises?.map((ele, i)=>{
                    <div key={i} className="fle justify-center shadow p-10">
                      <div className="">
                        <FaCode className="text-5xl"/>
                        <h2 className="text-2xl">Clear Code</h2>
                      </div>
                  </div>
                  })
              }
              
              
            </div>
        </div>
      </section>


      {/* product cart  */}
      <section className='py-20' id='dev_products'>
        <div className="container">
            {/* Title  */}
            <div className="pb-6 text-center"><SectionTitle title={"Applications"}/></div>
            {/* Cart Items  */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pt-5'>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
        </div>
      </section>




{/* About Section Design  */}
<section className='py-16' style={{backgroundColor: '#FFA100'}}>
    <div className="container mx-auto">
        <div className="flex items-center">
            <div className="flex-1">
                <p>LEARN ABOUT ME</p>
                <h2 className='text-5xl my-4'>4 Years of Experience</h2>
                <p className='text-lg'>Hello Friend, My name is Muntasir. I am working with WordPress for seance last 4 years. I can make Custom Themes, Plugins(little more). My Favourite Page Builder is Elementor pro, however, I love Divi also. I love music, typing, traveling, and making friendship, Thats All !</p>
            </div>
            <div className="flex-1 text-center">
                <img className='mx-auto' src="https://pt.muntasirahmedfahim.xyz/wp-content/themes/wp-devops/assets/img/about-wpdevops.webp" alt="" />
            </div>
        </div>
    </div>
</section>




      {/* product cart  */}
      <section className='py-20' id='dev_products'>
        <div className="container">
            {/* Title  */}
            <div className="pb-6 text-center"><SectionTitle title={"Projects"}/></div>
            {/* Cart Items  */}
            <div className='grid grid-cols-2 gap-8 pt-5'>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
        </div>
      </section>



    </>
  )
}
