import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_ITEM_TYPE_KEY } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaruantCategory from "./RestaruantCategory";

const RestaruantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  //console.log(resInfo);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   setResInfo(json.data);
  // };
  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => c.card?.card?.["@type"] === MENU_ITEM_TYPE_KEY
    );
   console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-3 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2 className="font-bold text-2xl">Menu</h2>
      {categories.map((category, index) => (
        <RestaruantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}

      {/* <ul className="inline-block">
        {categories.map((item) => (
          <li
            className=" px-42 m-4 border rounded-xl  text-lg font-semibold shadow-md"
            key={item?.itemCards?.card?.info?.id}
          >
            {item.name}
            {"Rs"} {item.price / 100 || item.defaultPrice / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};
export default RestaruantMenu;
