import "./BestItems.css";
import Item from "../Item/Item";

const BestItems = () => {
  return (
    <>
      <div className="BestItems">
        <p className="title">베스트 상품</p>
        <div className="item-list">
          <Item />
        </div>
      </div>
    </>
  );
};

export default BestItems;
