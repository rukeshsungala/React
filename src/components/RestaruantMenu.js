import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_ITEM_TYPE_KEY } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaruantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
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
  const { cards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  //   const { itemCards1 } =
  //     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //console.log(itemCards);

  const menu = cards
    ?.map((it) => it.card?.card)
    ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
    ?.map((x) => x.itemCards)
    .flat()
    .map((x) => x.card?.info);
  console.log(menu);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>

      <ul className="menu">
        {menu.map((item) => (
          <li className="menu-item" key={item.id}>
            {item.name} - {"Rs"}:{item.price / 100 || item.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaruantMenu;
