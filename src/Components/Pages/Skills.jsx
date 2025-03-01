import { CgCPlusPlus } from "react-icons/cg";
import { IoLogoJavascript } from "react-icons/io";
import { FaCopyright, FaGitAlt } from "react-icons/fa";
import { SiNodedotjs, SiTailwindcss, SiPostman, SiNetlify, SiMongodb, SiMongoose, SiTypescript } from "react-icons/si";
import { LiaReact } from "react-icons/lia";
import { FaGithub } from "react-icons/fa6";
import { RiVercelFill, RiNextjsFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import DetailsSubTitle from "../Global/DetailsSubTitle";


export default function Skills() {
  // Techonology Name 
  const languages = ['TypeScript', 'Javascript', 'C', 'C++'];
  const backend = ['NodeJs', 'MongoDB', 'Mongoose'];
  const frontend = [ 'NextJs', 'ReactJs', 'TailwindCSS', "Shadcn Ui"];
  const stateManagement = [ 'Zustand', 'Redux', 'ContextAPI'];
  const tools = ['Git', 'Github', 'Postman', 'Vercel', 'Netlify']

  // Icons name List 
  const languagesIcons = ['SiTypescript', 'IoLogoJavascript' ,'FaCopyright', 'CgCPlusPlus'];
  const backendIcons = ['SiNodedotjs', 'SiMongodb', 'SiMongoose'];
  const frontIcons = ['RiNextjsFill', 'LiaReact', 'SiTailwindcss', 'SiShadcnui'];
  const stateIcons = ['RiNextjsFill', 'LiaReact', 'SiTailwindcss'];
  const toolsIcons = ['FaGitAlt', 'FaGithub', 'SiPostman', 'RiVercelFill', 'SiNetlify'];

  // Icons Map
  const LanguageIconMap = {
    SiTypescript : SiTypescript,
    IoLogoJavascript : IoLogoJavascript,
    FaCopyright : FaCopyright,
    CgCPlusPlus : CgCPlusPlus
  }
  const backendIconMap = {
    SiNodedotjs : SiNodedotjs,
    SiMongodb : SiMongodb,
    SiMongoose : SiMongoose
  }
  const frontendIconMap = {
    RiNextjsFill : RiNextjsFill,
    LiaReact : LiaReact,
    SiTailwindcss : SiTailwindcss,
    SiShadcnui : SiShadcnui
  }
  const stateIconMap = {
    RiNextjsFill : RiNextjsFill,
    LiaReact : LiaReact,
    SiTailwindcss : SiTailwindcss,
  }
  const toolsIconMap = {
    FaGitAlt : FaGitAlt,
    FaGithub : FaGithub,
    SiPostman : SiPostman,
    RiVercelFill : RiVercelFill,
    SiNetlify : SiNetlify
  }
  return (
    <>
      <section>
        <DetailsSubTitle title={"Languages"}/>
        {/* <h4 className="text-xl border-l-4 pl-5 border-secondary">Languages:</h4> */}
        <div className="mt-5 flex flex-wrap gap-2">
        {
            languagesIcons.map((ele,i)=>{
              const GetIcon = LanguageIconMap[ele];
              return (
                <div key={i} className="bordr-[0.1px] p-1 px-3 bg-[#1E293B] flex gap-4" style={{background: "linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)"}}>
                  <div className="mt-1 text-xl text-primary">
                    {GetIcon ? <GetIcon /> : null}
                  </div>
                  <p className="font-semibold">{languages[i]}</p>
                </div>
              )
            })
        }
        </div>
      </section>

      {/* Backend Techonologys  */}
      <section className="mt-10">
        {/* Title  */}
        <DetailsSubTitle title={"Backend Techonologys"}/>

        <div className="mt-5 flex flex-wrap gap-2">
        {
            backendIcons.map((ele,i)=>{
              const GetIcon = backendIconMap[ele];
              console.log(GetIcon)
              return (
                <div key={i} className="bordr-[0.1px] p-1 px-3 bg-[#1E293B] flex gap-4" style={{background: "linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)"}}>
                  <div className="mt-1 text-xl text-primary">
                    {GetIcon ? <GetIcon /> : null}
                  </div>
                  <p className="font-semibold">{backend[i]}</p>
                </div>
              )
            })
        }
        </div>
      </section>

      {/* FrontEnd Techonologys  */}
      <section className="mt-10">
        {/* Title  */}
        <DetailsSubTitle title={"FrontEnd Techonologys"}/>

        <div className="mt-5 flex flex-wrap gap-2">
        {
            frontIcons.map((ele,i)=>{
              const GetIcon = frontendIconMap[ele];
              console.log(GetIcon)
              return (
                <div key={i} className="bordr-[0.1px] p-1 px-3 bg-[#1E293B] flex gap-4" style={{background: "linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)"}}>
                  <div className="mt-1 text-xl text-primary">
                    {GetIcon ? <GetIcon /> : null}
                  </div>
                  <p className="font-semibold">{frontend[i]}</p>
                </div>
              )
            })
        }
        </div>
      </section>


       {/* State Management */}
       <section className="mt-10">
        {/* Title  */}
        <DetailsSubTitle title={"State Management"}/>

        <div className="mt-5 flex flex-wrap gap-2">
        {
            stateIcons.map((ele,i)=>{
              const GetIcon = stateIconMap[ele];
              console.log(GetIcon)
              return (
                <div key={i} className="bordr-[0.1px] p-1 px-3 bg-[#1E293B] flex gap-4" style={{background: "linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)"}}>
                  <div className="mt-1 text-xl text-primary">
                    {GetIcon ? <GetIcon /> : null}
                  </div>
                  <p className="font-semibold">{stateManagement[i]}</p>
                </div>
              )
            })
        }
        </div>
      </section>


       {/* Tools */}
       <section className="my-10">
        {/* Title  */}
        <DetailsSubTitle title={"Tools"}/>

        <div className="mt-4 flex flex-wrap gap-2">
        {
            toolsIcons.map((ele,i)=>{
              const GetIcon = toolsIconMap[ele];
              console.log(GetIcon)
              return (
                <div key={i} className="bordr-[0.1px] p-1 px-3 my-1 bg-[#1E293B] flex gap-4" style={{background: "linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)"}}>
                  <div className="mt-1 text-xl text-primary">
                    {GetIcon ? <GetIcon /> : null}
                  </div>
                  <p className="font-semibold">{tools[i]}</p>
                </div>
              )
            })
        }
        </div>
      </section>
    </>
  );
}
