import { Link } from "react-router-dom";
import Navbar from "../Global/Navbar";
import Footer from "../Global/Footer";

export default function Projects() {
  const items = ["All", "Blog", "Contact"];

  return (
    <>
    <Navbar/>
      <section className="py-20">
        <div className="container">
          <div className="flex gap-5">
          {
            items.map(ele=>
              <Link key={ele} to={`/projects/${ele}`}>
                <p className="border shadow-lg px-4 py-2 rounded-md">{ele}</p>
              </Link>
            )
          }
          </div>

            <h2 className="text-4xl mt-10">This page is under Construction</h2>

        </div>
      </section>
      <Footer/>
    </>
  )
}