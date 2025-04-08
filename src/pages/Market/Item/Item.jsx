import "./Item.css";
import heart from "../../../assets/images/heart.svg";
const Item = ({ item }) => {
  const { images, name, description, price, favoriteCount } = item;
  return (
    <div className="Item">
      <img src={images[0]} alt={name} className="item-img" />
      <div className="text-section">
        <p className="item-description">{description}</p>
        <p className="item-price">{price}원</p>
        <div className="favorite">
          <img src={heart} alt="좋아요 아이콘" />
          <p className="favorite-count">{favoriteCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
