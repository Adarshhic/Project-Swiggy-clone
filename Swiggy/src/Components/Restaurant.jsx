import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";

export default function Restaurant() {
  const [RestData, setRestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const Proxyserver = "https://cors-anywhere.herokuapp.com/";
      const SwiggyApi =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8373&lng=80.9165&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

      const response = await fetch(Proxyserver + SwiggyApi);
      const data = await response.json();

      setRestData(
        data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
      );
    }

    fetchData();
  }, []);

//  console.log(RestData); 
// shimmmer effect
if(RestData.length==0)
  return <Shimmer></Shimmer>

  return (<>
    <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
            
            {
                RestData.map((restInfo)=><RestCard key={restInfo.info.id} restInfo={restInfo}></RestCard>)
            }

        </div> 
  </>);
}

// proxyurl="https://cors-anywhere.herokuapp.com/";