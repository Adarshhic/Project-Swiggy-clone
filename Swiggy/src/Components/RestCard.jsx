import { Link } from "react-router";
export default function RestCard({ restInfo }) {
  const imageId = restInfo.info.cloudinaryImageId;

  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`;

  

return (  
  <Link to={"/city/lucknow/" + restInfo?.info?.id}>
   <div className="w-72 rounded-xl overflow-hidden shadow-md bg-white cursor-pointer hover:scale-95 transition-transform duration-200">
      {/* Image with offer text overlay */}
      <div className="relative">
        <img
          className="w-full h-44 object-cover rounded-xl"
          src={imageUrl}
          alt={restInfo?.info?.name}
        />
        {restInfo?.info?.aggregatedDiscountInfoV3?.header && (
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-sm font-semibold px-2 py-1 rounded">
            {restInfo.info.aggregatedDiscountInfoV3.header}{" "}
            {restInfo.info.aggregatedDiscountInfoV3.subHeader}
          </div>
        )}
      </div>

      {/* Restaurant Info */}
      <div className="p-3">
        <h3 className="font-semibold text-lg truncate">{restInfo?.info?.name}</h3>

        {/* Rating + Time + Cost */}
        <p className="text-sm font-medium text-gray-700">
          ⭐ {restInfo?.info?.avgRating} • {restInfo?.info?.sla?.slaString}
        </p>

        {/* Cuisines */}
        <p className="text-sm text-gray-600 truncate">
          {restInfo?.info?.cuisines?.join(", ")}
        </p>

        {/* Locality */}
        <p className="text-sm text-gray-500">{restInfo?.info?.locality}</p>
      </div>
    </div>
    </Link>
  );
}

