import ResturantCard from "./ResturantCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //State Variable - super powerful variable
  const [searchText, setSearchText] = useState("");

  const [listOfRestraunt, setListOfRestraunt] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);

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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
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
      <div className="body">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search a Restaruant name.."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="search-btn"
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
            className="filter-btn"
            onClick={() => {
              let filterlist = listOfRestraunt.filter(
                (resturant) => resturant.info.avgRating > 4
              );
              setFilterRestaurants(filterlist);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="restaurant-list">
          {filterRestaurants.map((resturant) => (
            <Link
              key={resturant?.info?.id}
              to={"/restuarants/" + resturant.info.id}
            >
              <ResturantCard res={resturant?.info} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default Body;
