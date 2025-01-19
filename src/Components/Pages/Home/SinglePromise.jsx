import { useLoaderData, useLocation } from "react-router-dom";

export default function SinglePromise() {
  const allPromiseData = useLoaderData();
  const location = useLocation().pathname;
  const index = location[location.length - 1];
  const myPromiseData = allPromiseData.find((ele) => ele.id == index);
  console.log(myPromiseData);

  return (
    <>
      <section style={{ background: `url(${myPromiseData.img})no-repeat center`, backgroundSize: "cover"}}>
        <div style={{background: "rgba(0,0,0,0.6)"}} className="py-24">
          <div className="container">
            <h2 className="text-4xl text-white">{myPromiseData.title}</h2>
            <h2 className="my-3 text-white">{myPromiseData.des}</h2>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-20">
        <h2 className="text-4xl">{myPromiseData.myobj.title}</h2>
        {
          console.log("hello johfa ", myPromiseData.myobj.details)
        }
        {
          myPromiseData.myobj.details?.map(ele=>
            <h4 key={999} className="my-12"><span className="font-medium shadow p-2 bg-slate-50 mr-3"># {ele.name}</span> {ele.value}</h4>
            )
        }



        </div>
      </section>
    </>
  );
}
