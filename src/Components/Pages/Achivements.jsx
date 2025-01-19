import { LuSquareArrowOutUpRight } from "react-icons/lu";
// import DetailsSubTitle from "../Global/DetailsSubTitle";

export default function Achivements() {
  return (
    <>
      {/* Work Expriences  */}
      <section>
        {/* <div className="mb-3">
          <DetailsSubTitle title={"Work Expriences"} />
        </div> */}
        <div>
          {/* Achivement 1 */}
          <div className=" flex gap-3 my-2">
            <span className="font-bold text-secondary">#</span>
            <p>Intra Programming Contest - 2024, ZHSUST (Champion)</p>
            <a target="_blank" href="https://toph.co/contests/training/c4ezhqx/standings">
              <LuSquareArrowOutUpRight className="mt-2 font-bold text-secondary" />
            </a>
          </div>
          {/* Achivement 2  */}
          <div className=" flex gap-3 my-2">
            <span className="font-bold text-secondary">#</span>
            <p>Level One Seller At Fiverr</p>
            <a target="_blank" href="https://www.fiverr.com/codestands">
              <LuSquareArrowOutUpRight className="mt-2 font-bold text-secondary" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
