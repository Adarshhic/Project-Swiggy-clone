export default function GroceryCard({ foodData }) {
    return (
        <div className=" flex flex-col">
        <a href={foodData?.action?.link}>

     
            <img className="w-40 h-50"src={"https://media-assets.swiggy.com/swiggy/image/upload/" + foodData?.imageId}  />
               </a>
               <h2 className="text-center font-bold">{foodData?.action?.text}</h2>
        </div>
    );
}