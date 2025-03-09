import SingleProjectCover from "@/src/Components/SingleProjectCover";
import SingleProjectCart from "@/src/Components/SingleProjectCart";
import othersData from "/others.json?url"

export default function Others() {
return (
  <>
    <SingleProjectCover title={"Others Website Design"}/>
    <section className="lg:pb-20 lg:pt-10 pt-0 pb-10">
      <div className="container">
      {
        othersData?.map(ele=>
          <SingleProjectCart key={ele.id} ele={ele}/>
        )
      }
    </div>
  </section>


</>
)
}