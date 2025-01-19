import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { FaUpwork } from "react-icons/fa6";

export default function SocalIcons() {
  return (
    <div className="flex gap-3 justify-center mt-8 text-secondary">
      <a target="_blank" href="https://www.upwork.com/freelancers/~01e5bc188d1ea0c502">
        <FaUpwork className="text-3xl" />
      </a>
      <a href="https://www.linkedin.com/in/muntasir-ahmed-fahim/" target="_blank">
        <FaLinkedinIn className="text-2xl" />
      </a>
      <a href="https://github.com/battlesofarmy" target="_blank">
        <FaGithub className="text-2xl" />
      </a>
      <a href="https://codeforces.com/profile/muntasir_3301" target="_blank">
        <SiCodeforces className="text-2xl" />
      </a>
    </div>
  );
}
