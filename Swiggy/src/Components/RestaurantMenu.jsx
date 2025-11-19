import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";
import { Link } from "react-router";

export default function RestaurantMenu() {
  const { id } = useParams();
  const [selected, setSelected] = useState(null); // 🌱🍗🍽️ filter
  const [RestData, setRestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const Proxyserver = "https://cors-anywhere.herokuapp.com/";
        const SwiggyApi = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8373&lng=80.9165&restaurantId=${id}`;

        const response = await fetch(Proxyserver + SwiggyApi);
        const data = await response.json();

        const menuCards = data?.data?.cards || [];
        const groupedCard = menuCards.find((c) => c.groupedCard);
        const tempData =
          groupedCard?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

        const FilterData = tempData.filter(
          (item) =>
            item?.card?.card?.title || // categories
            item?.card?.card?.carousel || // Top Picks
            item?.card?.card?.["@type"]?.includes("ItemCategory") // menu
        );

        setRestData(FilterData);
      } catch (err) {
        console.error("❌ Fetch error:", err);
      }
    }

    fetchData();
  }, [id]);

return (
  <div className="w-full">

     <div className="w-[80%] mx-auto mt-20 mb-20">
      <Link to={`/city/lucknow/${id}/search`}>
       <p className="w-full text-center py-4 rounded-4xl bg-gray-200 text-2xl">Search for Dishes</p>
       </Link>
     </div>








    {/* Top Picks Section */}
    <div className="w-[80%] mx-auto mt-10">
      {RestData.map((menuItems) =>
        menuItems?.card?.card?.carousel ? (
          <MenuCard
            key={menuItems?.card?.card?.title}
            menuItems={menuItems?.card?.card}
          />
        ) : null
      )}
    </div>

    {/* Veg / Non-Veg / All Buttons */}
    <div className="w-full mt-10 mb-10 flex justify-center gap-6">
      <button
        className={`text-2xl py-2 px-6 rounded-2xl border transition ${
          selected === "veg" ? "bg-green-600 text-white" : "bg-gray-200"
        }`}
        onClick={() => setSelected("veg")}
      >
        🌱 Veg
      </button>

      <button
        className={`text-2xl py-2 px-6 rounded-2xl border transition ${
          selected === "nonveg" ? "bg-red-600 text-white" : "bg-gray-200"
        }`}
        onClick={() => setSelected("nonveg")}
      >
        🍗 Non-Veg
      </button>

      <button
        className={`text-2xl py-2 px-6 rounded-2xl border transition ${
          selected === null ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
        onClick={() => setSelected(null)}
      >
        🍽️ All
      </button>
    </div>

    {/* Other Menu Categories */}
    <div className="w-[80%] mx-auto mt-10">
      {RestData.map((menuItems) =>
        !menuItems?.card?.card?.carousel ? (
          <MenuCard
            key={menuItems?.card?.card?.title}
            menuItems={menuItems?.card?.card}
            foodselected={selected}
          />
        ) : null
      )}
    </div>
  </div>
);

}




