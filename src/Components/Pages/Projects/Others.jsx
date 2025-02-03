import SingleProjectCover from "../../Global/SingleProjectCover";
import SingleProjectCart from "../../Global/SingleProjectCart";
import othersData from "../../../../public/others.json"

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