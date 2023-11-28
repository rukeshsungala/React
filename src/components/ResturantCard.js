import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { res } = props;
  //instead of props we can write {resName,cuisine}
  // or const {resName,cuisine}=props. It is called destructuring

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, areaName } =
    res;

  return (
    <div className="card">
      <img
        alt="res-log"
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h2>{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      <h6>{areaName}</h6>
      <span>
        <h4
          style={
            avgRating < 4 ? { backgroundColor: "red" } : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>{costForTwo}</h4>
      </span>
    </div>
  );
};
export default ResturantCard;
