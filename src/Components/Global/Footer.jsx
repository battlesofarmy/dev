import { Link } from "react-router-dom";
import { BsSendFill } from "react-icons/bs";
import SocalIcons from "./SocialIcons";

function Footer() {
  return (
    <div className="bg-gray-900">
      <div className="max-w-2xl mx-auto text-white pb-8 pt-12">
        <div className="text-center">
          <h3 className="text-4xl mb-3">Want to collaborate?</h3>
          <p className="text-sm">
            Hit me up and lets see what can do together!
          </p>
          <a target="_blank" href={"https://www.upwork.com/freelancers/~01e5bc188d1ea0c502"}>
            <button className="styles.button border rounded py-2 px-5 mx-auto mt-10 flex gap-3 justify-center items-center">
              <BsSendFill />
              <span>Lets Get In Touch</span>
            </button>
          </a>
        </div>

        <SocalIcons />

        <div className="mt-16 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0">
            &copy; 2024. All Rights Reverved
          </p>
          <div className="order-1 md:order-2">
            <span className="px-2 border-r-[1px]">
              <Link to="/details/about">About me</Link>
            </span>
            <span className="px-2 border-r-[1px]">
              <Link to="/details/exprience">Exprience</Link>
            </span>
            <span className="px-2">
              <Link to="/projects">Projects</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
