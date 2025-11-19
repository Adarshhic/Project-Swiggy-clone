import { useState } from "react";
import RestInfo from "./RestInfo";

export default function MenuCard({ menuItems, foodselected }) {
  const [isOpen, setIsOpen] = useState(true);

  // 👉 Case 1: Top Picks (carousel)
  if (menuItems?.carousel) {
    return (
      <div className="w-full my-6">
        <p className="text-2xl font-bold mb-3">{menuItems?.title}</p>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {menuItems?.carousel?.map((item, index) => (
            <div key={index} className="min-w-[220px]">
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/" +
                  item.creativeId
                }
                alt="top-pick"
                className="w-full h-44 object-cover rounded-xl shadow-md"
              />
            </div>
          ))}
        </div>
        <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
      </div>
    );
  }

  // 👉 Case 2: Nested categories
  if ("categories" in menuItems) {
    return (
      <div className="w-full">
        <p className="text-2xl font-bold">{menuItems.title}</p>
        <div>
          {menuItems?.categories?.map((items) => (
            <MenuCard key={items?.title} menuItems={items} foodselected={foodselected} />
          ))}
        </div>
      </div>
    );
  }

  // 👉 Case 3: Filtering Veg / Non-Veg
  let filteredItems = menuItems?.itemCards || [];
  if (foodselected === "veg") {
    filteredItems = filteredItems.filter(
      (items) => items?.card?.info?.itemAttribute?.vegClassifier === "VEG"
    );
  } else if (foodselected === "nonveg") {
    filteredItems = filteredItems.filter(
      (items) => items?.card?.info?.itemAttribute?.vegClassifier === "NONVEG"
    );
  }

  if (filteredItems.length === 0) return null;

  // 👉 Case 4: Collapsible Category
  return (
    <div className="w-full">
      <div className="flex justify-between w-full">
        <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
        <button
          className="text-4xl font-bold mr-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "⌄" : "^"}
        </button>
      </div>

      {isOpen && (
        <div>
          {filteredItems.map((items) => (
            <RestInfo
              key={items?.card?.info?.id}
              restData={items?.card?.info}
            />
          ))}
        </div>
      )}

      <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
    </div>
  );
}


