import ResturantCard, { withPromotedLabel } from "./ResturantCard";

import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //State Variable - super powerful variable
  const [searchText, setSearchText] = useState("");

  const [listOfRestraunt, setListOfRestraunt] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);

  const RestaruantCardPromoted = withPromotedLabel(ResturantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);
  //Normal js variable
  //   let listOfResturant = [
  //     {
  //       id: "47438",
  //       name: "MCD",
  //       cloudinaryImageId: "uxtqnke0nupbu1i1fmvf",
  //       locality: "Outer Ring Road",
  //       areaName: "Marathahalli",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
  //       avgRating: 4.5,
  //     },
  //     {
  //       id: "47439",
  //       name: "Leon's - Burgers & Wings (Leon Grill)",
  //       cloudinaryImageId: "uxtqnke0nupbu1i1fmvf",
  //       locality: "Outer Ring Road",
  //       areaName: "Marathahalli",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
  //       avgRating: 4.2,
  //     },
  //     {
  //       id: "47440",
  //       name: "KFC",
  //       cloudinaryImageId: "uxtqnke0nupbu1i1fmvf",
  //       locality: "Outer Ring Road",
  //       areaName: "Marathahalli",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
  //       avgRating: 3.8,
  //     },
  //   ];

  // It is for live data api
  //console.log(listOfRestraunt);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    //console.log(json);
    //optional chaining
    setListOfRestraunt(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline! Please check internet connection...</h1>
    );

  return listOfRestraunt.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="">
        <div className=" p-4 m-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black rounded-md inline-flex"
            placeholder="Search a Restaruant name.."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="px-2 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const data = listOfRestraunt.filter((restaurant) =>
                restaurant?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilterRestaurants(data);
            }}
          >
            Search
          </button>
          <button
            className="px-2 py-2 bg-gray-50"
            onClick={() => {
              let filterlist = listOfRestraunt.filter(
                (resturant) => resturant.info.avgRating > 4
              );
              setFilterRestaurants(filterlist);
            }}
          >
            Top Rated Restaurant
          </button>
          <div>
            <label>UserName : </label>
            <input
              type="text"
              className="border border-solid border-black rounded-md inline-flex"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="flex-wrap  flex justify-center">
          {filterRestaurants.map((resturant) => (
            <Link
              key={resturant?.info?.id}
              to={"/restuarants/" + resturant.info.id}
            >
              {resturant.info.promoted ? (
                <RestaruantCardPromoted res={resturant?.info} />
              ) : (
                <ResturantCard res={resturant?.info} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default Body;
