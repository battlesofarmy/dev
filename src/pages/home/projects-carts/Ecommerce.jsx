import SingleProjectCover from "@/src/Components/SingleProjectCover";
import { useEffect, useState } from "react";
import SingleProjectCart from "@/src/Components/SingleProjectCart";

export default function Ecommerce() {
const [esites, setEsites] = useState();

useEffect(()=>{
    fetch('/ecomerce.json')
    .then(res=>res.json())
    .then(data=> setEsites(data))
},[]);

return (
  <>
    <SingleProjectCover title={"Ecommerce"}/>
    <section className="lg:pb-20 lg:pt-10 pt-0 pb-10">
      <div className="container">
      {
        esites?.map(ele=>
           <SingleProjectCart key={ele.id} ele={ele}/>
        )
      }
    </div>
  </section>
</>
)
}