import { useState } from "react";
import ItemList from "./itemList";

const RestaruantCategory = ({ data, showItems, setShowIndex }) => {
  //console.log(data);
  //const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold test-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="">🔽</span>
        </div>

        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};
export default RestaruantCategory;
