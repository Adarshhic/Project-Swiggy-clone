import { imageGridCards } from "../utils/FoodData"
import Foodcard from "./FoodCard"

export default function FoodOption (){
 return (
    <>
    <div className="w-[80%] container mx-auto flex flex-wrap mt-10 gap-5 ">
        {
            imageGridCards.map((foodData)=><Foodcard key ={foodData.id} foodData={foodData}></Foodcard>)
        }

    </div>
    </>
 )
} 