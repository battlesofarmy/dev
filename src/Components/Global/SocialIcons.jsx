import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { FaUpwork } from "react-icons/fa6";


export default function SocalIcons() {

  return (
    <div  style={{color: '#D97706'}} className='flex gap-3 justify-center mt-8'>
        <FaUpwork className='text-3xl'/>
        <FaLinkedinIn className='text-2xl'/>
        <FaGithub className='text-2xl'/>
        <SiCodeforces className='text-2xl'/>
    </div>
  )
}