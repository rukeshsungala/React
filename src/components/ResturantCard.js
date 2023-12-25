import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const ResturantCard = (props) => {
  const { res } = props;
  //instead of props we can write {resName,cuisine}
  // or const {resName,cuisine}=props. It is called destructuring

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    areaName,
    sla,
  } = res;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="m-4 w-[250px] p-4 rounded-2xl bg-gray-100 hover:bg-gray-300">
      <img
        alt="res-log"
        className="rounded-2xl"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h2 className="font-bold py-4 text-lg">{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      {/* <h6>{areaName}</h6> */}
      <span>
        <h4 style={avgRating < 4 ? { color: "red" } : { color: "green" }}>
          <i className="fa-solid fa-star"></i>⭐{avgRating}
        </h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} Minutes</h4>
        <h4>{loggedInUser}</h4>
      </span>
    </div>
  );
};
export const withPromotedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg ">
          Promoted
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
