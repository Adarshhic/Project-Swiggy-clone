import { GroceryGridCards } from "../Utils/Grocery"
import GroceryCard from "./GroceryCard"

export default function GroceryOption() {
  return (
    <div className="mt-20 w-[80%] mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shop Groceries on Instamart</h1>
      <div className="flex flex-nowrap overflow-x-auto gap-7 scrollbar-hide">
        {
          GroceryGridCards.map((foodData) => (
            <div key={foodData.id} className="min-w-[150px]">
              <GroceryCard foodData={foodData} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
