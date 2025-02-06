import SingleProjectCover from "../../Global/SingleProjectCover";
import { useEffect, useState } from "react";
import SingleProjectCart from "../../Global/SingleProjectCart";

export default function Wordpress() {
const [esites, setEsites] = useState();

useEffect(()=>{
    fetch('/wordpress.json')
    .then(res=>res.json())
    .then(data=> setEsites(data))
},[]);

return (
  <>
    <SingleProjectCover title={"Wordpress Websites Design"}/>
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