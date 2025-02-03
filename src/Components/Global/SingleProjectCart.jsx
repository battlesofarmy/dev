import fontendImg from "../../assets/projects/font.png";
import backendImg from "../../assets/projects/back.png";
import toolsImg from "../../assets/projects/tools.png";

export default function SingleProjectCart({ ele }) {
  return (
    <div
      key={ele.id}
      className="grid md:grid-cols-2 grid-cols-1 gap-10 shadow-lg border py-12 px-5 bg-white mt-10"
    >
      {/* Left Part  */}
      <div className="flex items-center">
        <div>
          <img src={ele.img} alt="" />
          <div className="flex justify-around mt-12">
            <div>
              <a target="_blank" href={ele.code}>
                <button className="py-2 px-6 border-0 shadow rounded-full hover:bg-gray-800 hover:text-white hover:shadow-lg font-semibold">
                  Source Code
                </button>
              </a>
            </div>
            <div>
              <a target="_blank" href={ele.live}>
                <button className="py-2 px-6 border-0 shadow rounded-full hover:bg-orange-600 text-gray-50 hover:shadow-lg bg-orange-500 font-semibold">
                  Live Preview
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Right Part  */}
      <div>
        <h2 className="text-2xl border-l-[3px] border-primary pl-4">
          {ele.title}
        </h2>
        <p className="my-3">{ele.des}</p>
        <h2 className="text-xl text-gray-600 italic mt-10 mb-2">Features: </h2>
        <ul>
          {ele.features?.map((val, i) => (
            <li key={i + 42}>{val}</li>
          ))}
        </ul>
        {/* Technologys  */}
        <h2 className="text-xl text-gray-600 italic mt-10 mb-2">
          Technologys:{" "}
        </h2>
        {/* Frontend  */}
        <div className="flex flex-wrap items-center py-2 md:py-1">
          <div className="mr-5">
            <img width={45} src={fontendImg} alt="" />
          </div>
          {ele.frontend?.map((data, i) => (
            <div key={i + 91}>
              <p className="shadow py-1 px-3 mr-2 text-sm">{data}</p>
            </div>
          ))}
        </div>
        {/* Backend  */}
        <div className="flex flex-wrap items-center py-2 md:py-1">
          <div className="mr-5">
            <img width={45} src={backendImg} alt="" />
          </div>
          {ele.backend.length===0 && "It has No Backend"}
          {ele.backend?.map((data, i) => (
            <div key={i + 192}>
              <p className="shadow py-1 px-3 mr-2 text-sm">{data}</p>
            </div>
          ))}
        </div>
        {/* Tools  */}
        <div className="flex flex-wrap items-center py-2 md:py-1">
          <div className="mr-5">
            <img width={45} src={toolsImg} alt="" />
          </div>
          {ele.tools?.map((data, i) => (
            <div key={i + 245}>
              <p className="shadow py-1 px-3 mr-2 text-sm">{data}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
