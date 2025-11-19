import { dineoutRestaurants } from "../Utils/DIneData";
import DineCard from "./DineCard";

export default function DineOption(){ 
    return(
        <div className="mt-20 w-[80%] mx-auto">
            <p className="text-2xl font-bold">Discover best restaurants on Dineout</p>
            <div className="flex flex-nowrap overflow-x-auto mt-5 gap-5 mb-20 scrollbar-hide">
                {
                    dineoutRestaurants.map((RestData)=>
                      <DineCard key={RestData?.info?.id} RestData={RestData} />
                    )
                }
            </div>
        </div>
    )
}
