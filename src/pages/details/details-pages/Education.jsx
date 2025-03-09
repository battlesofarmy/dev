import { MdOutlineDownloading } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function Education() {
  return (
    <>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <MdOutlineDownloading className="text-2xl text-secondary my-2"/>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">Mar 2022 - Apr 2026</time>
            <br />
            <time className="font-mono italic">CGPA(Current): 3.78/4.00</time>
            <div className="text-lg font-semibold text-secondary mt-2">B.Sc. in Computer Science and Engineering</div>
            <h2 className="text-sm italic">Z. H. Sikder University of Science and Technology</h2>
            <p className="mt-4">Ranked in the top 15% of class with two Deans List awards for merit. Additionally, was recognized once for outstanding extra curricular activities.</p>
            <p className="italic text-gray-400 font-semibold mt-5 border-r-2 pr-2 border-secondary">Notable Courses</p>
            <ul className="mt-3 text-left list-[square]">
              <li>CSE 101 - Computer Fundamentals</li>
              <li>CSE 103 - Structured Programming language</li>
              <li>CSE 221 - Data Structures and Algorithms</li>
              <li>CSE 203 - Discrete Mathematics</li>
            </ul>
          </div>
          <hr />
        </li>
        <li className="lg:mt-0 mt-6">
          <div className="timeline-middle">
            <FaRegCircleCheck className="text-2xl text-primary my-2"/>
          </div>
          <div className="timeline-end mb-10 md:text-end">
            <time className="font-mono italic">2021</time>
            <br />
            <time className="font-mono italic">CGPA: 4.87/5.00</time>
            <div className="text-lg font-semibold text-primary my-2">Higher Secondary Certificate (HSC)</div>
            <h2 className="text-sm italic">Shahajuddin Sarker Model Higher Secondary School </h2>
            <p className="mt-4">Received best student award</p>
          </div>
          <hr />
        </li>
        {/* SSC  */}
        <li>
          <div className="timeline-middle">
            <FaRegCircleCheck className="text-2xl text-primary my-2"/>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2019</time>
            <br />
            <time className="font-mono italic">CGPA: 5.00/5.00</time>
            <div className="text-lg font-semibold text-primary my-2">Higher Secondary Certificate (HSC)</div>
            <h2 className="text-sm italic">Knowledge Academy School and College </h2>
            <p className="mt-4">Part Time Job offer in the school as a Mathematics teacher</p>
          </div>
          <hr />
        </li>

      </ul>
    </>
  )
}

