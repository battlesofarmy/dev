import { LuSquareArrowOutUpRight } from "react-icons/lu";

export default function CPExprience() {
  return (
    <>
      {/* Exp 1  */}
      <div className=" flex gap-3 my-2">
        <span className="font-bold text-secondary">#</span>
        <p>Intra Programming Contest - 2024, ZHSUST (Champion)</p>
        <a
          target="_blank"
          href="https://toph.co/contests/training/c4ezhqx/standings"
        >
          <LuSquareArrowOutUpRight className="mt-2 font-bold text-secondary" />
        </a>
      </div>
      {/* Exp 2  */}
      <div className=" flex gap-3 my-2">
        <span className="font-bold text-secondary">#</span>
        <p>Solved 320+ Problems on Codeforces</p>
        <a target="_blank" href="https://codeforces.com/profile/muntasir_3301">
          <LuSquareArrowOutUpRight className="mt-2 font-bold text-secondary" />
        </a>
      </div>
      {/* Exp 3  */}
      <div className=" flex gap-3 my-2">
        <span className="font-bold text-secondary">#</span>
        <p>Solved 210+ Problems on Beecrowd</p>
        <a target="_blank" href="https://judge.beecrowd.com/en/profile/933484">
          <LuSquareArrowOutUpRight className="mt-2 font-bold text-secondary" />
        </a>
      </div>
      {/* Exp 4  */}
      <div className=" flex gap-3 my-2">
        <span className="font-bold text-secondary">#</span>
        <p>
          17.72% Rank on National High School Programming Contest (NHSPC) 2022
        </p>
        <a
          target="_blank"
          href="https://toph.co/c/national-high-school-2022-preliminary/standings?start=0"
        >
          <LuSquareArrowOutUpRight className="mt-2 font-bold text-secondary" />
        </a>
      </div>
    </>
  );
}
