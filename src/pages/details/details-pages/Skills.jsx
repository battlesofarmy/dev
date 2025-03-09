import { CgCPlusPlus } from "react-icons/cg";
import { IoLogoJavascript } from "react-icons/io";
import { FaCopyright, FaGitAlt } from "react-icons/fa";
import { SiNodedotjs, SiTailwindcss, SiPostman, SiNetlify, SiMongodb, SiMongoose, SiTypescript } from "react-icons/si";
import { LiaReact } from "react-icons/lia";
import { FaGithub } from "react-icons/fa6";
import { RiVercelFill, RiNextjsFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import DetailsSubTitle from "../../../Components/DetailsSubTitle";

// State management
import { TbBrandZulip } from "react-icons/tb";
import { TbBrandRedux } from "react-icons/tb";
import { FaPiedPiper } from "react-icons/fa6";

// Backend Techonologys
import { SiNestjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
// Database
import { SiPostgresql } from "react-icons/si";
// auth
import { RiFirebaseFill } from "react-icons/ri";
import { RiSupabaseLine } from "react-icons/ri";
import { SiJsonwebtokens } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
// API
import { TbApiOff } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";


export default function Skills() {
  // Techonology Name 
  const languages = ['TypeScript', 'Javascript', 'C', 'C++'];
  const backend = ['NodeJs','ExpressJs','NestJs','Prisma', 'Mongoose'];
  const database = ['PostgreSQL','MongoDB'];
  const frontend = [ 'NextJs', 'ReactJs', 'TailwindCSS', "Shadcn Ui"];
  const stateManagement = [ 'Zustand', 'Redux', 'ContextAPI'];
  const auth = [ 'Firebase', 'Supabase', 'JWT', 'NextJs Auth'];
  const api = [ 'REST API', 'GraphQL'];
  const tools = ['Git', 'Github', 'Postman', 'Vercel', 'Netlify']

  // Icons name List 
  const languagesIcons = ['SiTypescript', 'IoLogoJavascript' ,'FaCopyright', 'CgCPlusPlus'];
  const backendIcons = ['SiNodedotjs','SiExpress', 'SiNestjs','SiPrisma', 'SiMongoose'];
  const databaseIcons = ['SiPostgresql','SiMongodb'];
  const frontIcons = ['RiNextjsFill', 'LiaReact', 'SiTailwindcss', 'SiShadcnui'];
  const stateIcons = ['TbBrandZulip', 'TbBrandRedux', 'FaPiedPiper'];
  const authIcons = ['RiFirebaseFill', 'RiSupabaseLine', 'SiJsonwebtokens', 'TbBrandNextjs'];
  const apiIcons = ['TbApiOff', 'GrGraphQl'];
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
    SiExpress: SiExpress,
    SiNestjs: SiNestjs,
    SiPrisma: SiPrisma,
    SiMongoose : SiMongoose
  }
  const databaseIconMap = {
    SiPostgresql : SiPostgresql,
    SiMongodb: SiMongodb,
  }
  const frontendIconMap = {
    RiNextjsFill : RiNextjsFill,
    LiaReact : LiaReact,
    SiTailwindcss : SiTailwindcss,
    SiShadcnui : SiShadcnui
  }
  const stateIconMap = {
    TbBrandZulip : TbBrandZulip,
    TbBrandRedux : TbBrandRedux,
    FaPiedPiper : FaPiedPiper,
  }
  const authIconMap = {
    RiFirebaseFill : RiFirebaseFill,
    RiSupabaseLine : RiSupabaseLine,
    SiJsonwebtokens : SiJsonwebtokens,
    TbBrandNextjs : TbBrandNextjs
  }
  const apiIconMap = {
    TbApiOff : TbApiOff,
    GrGraphQl : GrGraphQl
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


      
      {/* Database  */}
      <section className="mt-10">
        {/* Title  */}
        <DetailsSubTitle title={"Database"}/>

        <div className="mt-5 flex flex-wrap gap-2">
        {
            databaseIcons.map((ele,i)=>{
              const GetIcon = databaseIconMap[ele];
              console.log(GetIcon)
              return (
                <div key={i} className="bordr-[0.1px] p-1 px-3 bg-[#1E293B] flex gap-4" style={{background: "linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)"}}>
                  <div className="mt-1 text-xl text-primary">
                    {GetIcon ? <GetIcon /> : null}
                  </div>
                  <p className="font-semibold">{database[i]}</p>
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


      
      {/* Authentication & Authorization */}
      <section className="mt-10">
        {/* Title  */}
        <DetailsSubTitle title={"Authentication & Authorization"}/>

        <div className="mt-5 flex flex-wrap gap-2">
        {
            authIcons.map((ele,i)=>{
              const GetIcon = authIconMap[ele];
              console.log(GetIcon)
              return (
                <div key={i} className="bordr-[0.1px] p-1 px-3 bg-[#1E293B] flex gap-4" style={{background: "linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)"}}>
                  <div className="mt-1 text-xl text-primary">
                    {GetIcon ? <GetIcon /> : null}
                  </div>
                  <p className="font-semibold">{auth[i]}</p>
                </div>
              )
            })
        }
        </div>
      </section>


      {/* API Management */}
      <section className="mt-10">
        {/* Title  */}
        <DetailsSubTitle title={"API Development"}/>

        <div className="mt-5 flex flex-wrap gap-2">
        {
            apiIcons.map((ele,i)=>{
              const GetIcon = apiIconMap[ele];
              console.log(GetIcon)
              return (
                <div key={i} className="bordr-[0.1px] p-1 px-3 bg-[#1E293B] flex gap-4" style={{background: "linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)"}}>
                  <div className="mt-1 text-xl text-primary">
                    {GetIcon ? <GetIcon /> : null}
                  </div>
                  <p className="font-semibold">{api[i]}</p>
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
