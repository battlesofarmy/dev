import { useLoaderData, useLocation } from "react-router-dom"

export default function SinglePromise() {
    const allPromiseData = useLoaderData();
    const location = useLocation().pathname;
    const index = location[location.length-1];
    const myPromiseData = allPromiseData.find(ele=> ele.id == index);
    console.log(myPromiseData)

  return (
    <>
      <section className="py-20">
        <div className="container">
           <h2 className="text-4xl">{myPromiseData.title}</h2>
           <br />
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti iure earum inventore asperiores officia reiciendis cupiditate officiis voluptate vero enim at sed, quis sequi, natus culpa tempore veniam facilis vitae ipsam. Impedit possimus ab molestias, voluptatem, sed voluptates fugiat iste voluptas ex, numquam suscipit velit itaque architecto aspernatur. Possimus, corrupti voluptatibus facere dolorum quaerat repellendus. Dolorem asperiores praesentium aspernatur accusantium illum, in quasi sapiente cumque dolores! Error, magni aperiam optio ullam, eos quae alias veritatis aliquam tempore perferendis consequatur nulla reprehenderit dignissimos placeat nostrum possimus dolorum eum nam sunt non ab repellat hic, adipisci molestias. Iusto voluptatem id natus?</p>
        </div>
      </section>
    </>
  )
}
 