import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  //console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (i) => {
    dispatch(addItem(i));
  };

  return (
    <div>
      {items.map((i) => (
        <div
          key={i.card.info.id}
          className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{i.card.info.name}</span>
              <span>
                - ₹ {i.card.info.price / 100 || i.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{i.card.info.description}</p>
          </div>

          <div className="w-3/12">
            <div className="absolute">
              <button
                className="p-2 mx-16 bg-green-200 shadow-lg rounded-lg justify-between"
                onClick={() => handleAddItem(i)}
              >
                Add
              </button>
            </div>
            <img
              src={CDN_URL + i.card.info.imageId}
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
