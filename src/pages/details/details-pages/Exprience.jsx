import { LuSquareArrowOutUpRight } from "react-icons/lu";
import CPExprience from "../../../Components/CPExprience";
import DetailsSubTitle from "../../../Components/DetailsSubTitle";

export default function Exprience() {
  return (
    <>
    {/* Work Expriences  */}
     <section>
       <div className="mb-3">
          <DetailsSubTitle title={"Work Expriences"}/>
       </div>
      <div>
        {/* Exp 1  */}
        <div className=" flex gap-3 my-2">
          <span className="font-bold text-secondary">#</span>
          <p>FrontEnd Developer At Upwork (starting)</p>
          <a target="_blank" href="https://www.upwork.com/freelancers/~01e5bc188d1ea0c502">
            <LuSquareArrowOutUpRight className="mt-2 font-bold text-secondary" />
          </a>
        </div>
        {/* Exp 2  */}
        <div className=" flex gap-3 my-2">
          <span className="font-bold text-secondary">#</span>
          <p>Works On a Ecommerce Startup</p>
          <a target="_blank" href="https://akashbazar.com/">
            <LuSquareArrowOutUpRight className="mt-2 font-bold text-secondary" />
          </a>
        </div>
        {/* Exp 3  */}
        <div className=" flex gap-3 my-2">
          <span className="font-bold text-secondary">#</span>
          <p>Wordpress Developer At Fiverr</p>
          <a target="_blank" href="https://www.fiverr.com/codestands">
            <LuSquareArrowOutUpRight className="mt-2 font-bold text-secondary" />
          </a>
        </div>
        {/* Exp 4  */}
        <div className=" flex gap-3 my-2">
          <span className="font-bold text-secondary">#</span>
          <p>Compuer Oparator at READIBD.ORG</p>
          <a target="_blank" href="https://www.facebook.com/readibd/">
            <LuSquareArrowOutUpRight className="mt-2 font-bold text-secondary" />
          </a>
        </div>
      </div>
     </section>

     {/* Problem Solving Expriences  */}
     <section className="pb-5">
        <div className="mb-3 mt-10">
            <DetailsSubTitle title={"Problem Solving Expriences"}/>
        </div>
        <CPExprience/>
     </section>
    </>
  )
}
