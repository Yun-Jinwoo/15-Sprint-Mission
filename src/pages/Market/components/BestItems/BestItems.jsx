import { useState, useEffect } from "react";
import { getProducts } from "../../../../../src/api";
import "./BestItems.css";
import Item from "../Item/Item";

const BestItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getBestItems() {
      const data = await getProducts({ pageSize: 4, orderBy: "favorite" });
      setItems(data.list);
    }

    getBestItems();
  }, []);
  return (
    <>
      <div className="BestItems">
        <p className="title">베스트 상품</p>
        <div className="item-list">
          {items.map((item) => {
            return <Item key={item.id} item={item} size="four" />;
          })}
        </div>
      </div>
    </>
  );
};

export default BestItems;
