// import { getSearchResults } from '@/lib/search'

import Image from "next/image";

export default async function Images({searchParams, }: {searchParams: Promise<{[key: string]: string | string[] | undefined}>}) {
  const search = (await searchParams).search || "";
  const response = await fetch(`https://images-api.nasa.gov/search?q=${search}&media_type=image`)
  const data = await response.json()
  console.log("Data", data)
  // const response = await fetch("https://images-api.nasa.gov/search?q=hubble")
  return (
    <div>
      <h1></h1>
      <ul className="grid grid-cols-3 gap-4">
        {data.collection.items.map((element: any) => (
          <div className="justify-center items-center" key={element.data[0].nasa_id}>
            
            {/* {console.log("Link", element.links.at(-1))} */}
            <div className="shadow-lg rounded-lg w-fit mx-auto">
              <Image className=""
                src={element.links.at(-1).href} 
                alt={element.data[0].description} 
                width={element.links.at(-1).width ? element.links.at(-1).width : 500} 
                height={element.links.at(-1).height ? element.links.at(-1).height : 500}
              />
              <p className="font-bold text-md p-2">{element.data[0].title}</p>

            </div>

            {/* <Image src={"https://images-assets.nasa.gov/image/hubble-eyes-galactic-refurbishment_17322896925_o/hubble-eyes-galactic-refurbishment_17322896925_o~medium.jpg"} alt={element.data[0].description} width={1000} height={1000}/>   */}
            {/* <Image src={element.links[3].href} alt={element.data[0].description} width={element.links[3].width} height={element.links[3].height}/>   */}
          </div>
          
        ))}
      </ul>
    </div>
  )
}
