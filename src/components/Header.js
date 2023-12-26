import { useState, useContext } from "react";
import LOGO_URL from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  let [btnName, setbtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="m-2 flex items-centers justify-between bg-red-500 shadow-lg mb-2 rounded-2xl">
      <div className="logo-container">
        <img
          className="shadow-2xl table-fixed w-24 m-2 p-2 rounded-full"
          nav-items
          src={LOGO_URL}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>

          <li className="px-4 font-bold">
            <Link to={"/cart"}> Cart ({cartItems.length})</Link>
          </li>

          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="p-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
