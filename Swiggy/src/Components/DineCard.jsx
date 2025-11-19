export default function DineCard({ RestData }) {
  const imageBase = "https://media-assets.swiggy.com/swiggy/image/upload/";

  // Safely extract offers from multiple possible places
  const vendorOffer = RestData?.info?.vendorOffer?.info;
  const offerV2 = RestData?.info?.offerInfoV2?.otherOffers?.offers?.[0];
  const offerV3 = RestData?.info?.offerInfoV3?.vendorOffer;

  return (
    <div className="w-80 flex-none bg-white rounded-2xl shadow-md overflow-hidden">
      <a target="_blank" href={RestData?.cta?.link} rel="noreferrer">
        {/* Image + Gradient */}
        <div className="relative">
          <img
            className="w-full h-44 object-cover"
            src={imageBase + RestData?.info?.mediaFiles?.[0]?.url}
            alt={RestData?.info?.name}
          />

          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"></div>

          {/* Name */}
          <p className="absolute bottom-3 left-3 text-lg font-semibold text-white z-10">
            {RestData?.info?.name}
          </p>

          {/* Rating */}
          {RestData?.info?.rating?.value && (
            <p className="absolute bottom-3 right-3 text-sm font-bold text-white z-10">
              ⭐ {RestData?.info?.rating?.value}
            </p>
          )}
        </div>

        {/* Info Section */}
        <div className="p-3 text-sm text-gray-700 space-y-1">
          <p className="text-gray-600">
            {RestData?.info?.cuisines?.join(" • ")}
          </p>
          <p className="font-medium">{RestData?.info?.costForTwo}</p>
          <p className="text-gray-500">{RestData?.info?.locality}</p>
          <p className="text-gray-500">
            {RestData?.info?.locationInfo?.distanceString}
          </p>
        </div>

        {/* Offers Section */}
        {(vendorOffer?.title || offerV2?.header || offerV3?.title) && (
          <div className="p-3 border-t text-green-700 text-xs bg-green-100 rounded-b-2xl space-y-1">
            {/* Vendor Offer */}
            {vendorOffer?.title && (
              <p>
                {vendorOffer.title}{" "}
                {vendorOffer.subtitle && `- ${vendorOffer.subtitle}`}
              </p>
            )}

            {/* Offer V2 */}
            {offerV2?.header && <p>{offerV2.header}</p>}

            {/* Offer V3 */}
            {offerV3?.title && (
              <p>
                {offerV3.title}{" "}
                {offerV3.subtitle && `- ${offerV3.subtitle}`}
              </p>
            )}
          </div>
        )}
      </a>
    </div>
  );
}

