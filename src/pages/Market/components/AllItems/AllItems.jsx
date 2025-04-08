import { useState, useEffect } from "react";
import { getProducts } from "../../../../../src/api.js";
import Item from "../Item/Item";
import "./AllItems.css";

import search from "/src/assets/images/search.svg";
import arrow_left from "/src/assets/images/arrow_left.svg";
import arrow_right from "/src/assets/images/arrow_right.svg";

const AllItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      const data = await getProducts({ pageSize: 10, orderBy: "recent" });
      setItems(data.list);
    }

    getItems();
  }, []);

  return (
    <>
      <div className="AllItems">
        <div className="top-section">
          <p className="title">전체 상품</p>
          <div className="menu-bar">
            <div className="search-container">
              <img src={search} alt="돋보기 아이콘" />
              <input
                className="search-input"
                placeholder="검색할 상품을 입력해주세요"
              />
            </div>
            <button className="register">상품 등록하기</button>
            <select className="orderby">
              <option value="recent">최신순</option>
              <option value="favorite">좋아요순</option>
            </select>
          </div>
        </div>
        <div className="items-container">
          {items.map((item) => {
            return <Item key={item.id} item={item} size="five" />;
          })}
        </div>
        <div className="pagination">
          <button>
            <img src={arrow_left} alt="처음으로" />
          </button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>
            <img src={arrow_right} alt="끝으로" />
          </button>
        </div>
      </div>
    </>
  );
};

export default AllItems;
