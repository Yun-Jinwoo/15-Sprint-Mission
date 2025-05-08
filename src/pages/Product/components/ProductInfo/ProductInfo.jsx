import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../../api/getProduct";

const ProductInfo = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getItemInfo() {
      const item = await getProduct({ id });
      console.log(item);
      setItem(item);
      setLoading(false);
    }

    getItemInfo();
  }, []);

  return (
    <>
      {!loading && (
        <div className="info-section">
          <div className="image-section">
            <img src={item.images[0]} alt="상품이미지" />
          </div>
          <div className="text-section">
            <div className="product-info">
              <div className="item-name">{item.name}</div>
              <div className="item-price">{item.price.toLocaleString()}</div>
              <div className="item-description">
                <p>상품 소개</p>
                <p>{item.description}</p>
              </div>
              <div className="item-tags">
                <p>상품 태그</p>
                {item.tags.map((tag, index) => (
                  <div key={index} className="tag">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="user-info">
              <div className="image-section">
                <img src={item.image} alt="" />
              </div>
              <div className="text-section">
                <div className="user-name">{item.ownerNickname}</div>
                <div className="date">{item.createdAt}</div>
              </div>
              <div className="favorite-section">
                <button>heart</button>
                {item.favoriteCount}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductInfo;
