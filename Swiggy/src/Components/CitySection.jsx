import React, { useState } from "react";

const foodCities = [
  "Bangalore","Gurgaon","Hyderabad","Delhi","Mumbai","Pune","Kolkata",
  "Chennai","Ahmedabad","Chandigarh","Jaipur","Lucknow","Surat","Indore","Bhopal",
];

const groceryCities = [
  "Bangalore","Gurgaon","Hyderabad","Delhi","Mumbai","Pune","Kolkata",
  "Chennai","Ahmedabad","Chandigarh","Jaipur","Nagpur","Patna","Kanpur","Agra",
];

export default function CitySection() {
  const [showFoodMore, setShowFoodMore] = useState(false);
  const [showGroceryMore, setShowGroceryMore] = useState(false);

  const visibleFoodCities = showFoodMore ? foodCities : foodCities.slice(0, 9);
  const visibleGroceryCities = showGroceryMore ? groceryCities : groceryCities.slice(0, 9);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      {/* Food Cities */}
      <h2 className="text-xl font-bold mb-4">Cities with food delivery</h2>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {visibleFoodCities.map((city, index) => (
          <button
            key={index}
            className="border rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 text-sm text-left"
          >
            Order food online in {city}
          </button>
        ))}
        <button
          onClick={() => setShowFoodMore(!showFoodMore)}
          className="text-orange-500 font-semibold text-left"
        >
          {showFoodMore ? "Show Less ▲" : "Show More ▼"}
        </button>
      </div>

      {/* Grocery Cities */}
      <h2 className="text-xl font-bold mb-4 mt-10">Cities with grocery delivery</h2>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {visibleGroceryCities.map((city, index) => (
          <button
            key={index}
            className="border rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 text-sm text-left"
          >
            Order grocery delivery in {city}
          </button>
        ))}
        <button
          onClick={() => setShowGroceryMore(!showGroceryMore)}
          className="text-orange-500 font-semibold text-left"
        >
          {showGroceryMore ? "Show Less ▲" : "Show More ▼"}
        </button>
      </div>
    </div>
  );
}

