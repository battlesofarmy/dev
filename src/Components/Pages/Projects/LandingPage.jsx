import SingleProjectCover from "../../Global/SingleProjectCover";
import fontendImg from '../../../assets/projects/font.png'
import backendImg from '../../../assets/projects/back.png'
import toolsImg from '../../../assets/projects/tools.png'
import { useEffect, useState } from "react";
import SingleProjectCart from "../../Global/SingleProjectCart";

export default function LandingPage() {
const [esites, setEsites] = useState();

useEffect(()=>{
    fetch('/landing-page.json')
    .then(res=>res.json())
    .then(data=> setEsites(data))
},[]);

return (
  <>
    <SingleProjectCover title={"Landing Page Design"}/>
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