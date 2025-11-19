import { useParams } from "react-router";
import { useEffect, useState } from "react";
import RestInfo from "./RestInfo";

export default function SearchFood() {
  const { id } = useParams();
  const [food, setFood] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
  try {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = `https://www.swiggy.com/dapi/menu/pl/search?lat=26.8373&lng=80.9165&restaurantId=${id}&query=${food}&submitAction=ENTER`;

    const response = await fetch(proxy + url);
    const data = await response.json();

    // ✅ Extract all itemCards (search results)
    const itemCards =
      data?.data?.cards?.[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[0]
        ?.card?.card?.itemCards || [];

    console.log("✅ Search Results:", itemCards.map(i => i.card.info.name));
    setResults(itemCards);   // save everything
  } catch (err) {
    console.error("❌ Error fetching search:", err);
  }
}

    if (food.length > 1) {
      fetchData();
    } else {
      setResults([]); // reset on empty
    }
  }, [food, id]);

  return (
    <div className="w-[80%] mx-auto mt-20">
      <input
        className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl border"
        placeholder="Search here"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />

      {/* Render results */}
      <div className="mt-6">
        {results.length > 0 ? (
          results.map((item, index) => (
            <RestInfo
              key={`${item?.card?.info?.id}-${index}`}
              restData={item?.card?.info}
            />
          ))
        ) : (
          food.length > 1 && (
            <p className="text-gray-500 text-center mt-10">No items found</p>
          )
        )}
      </div>
    </div>
  );
}
