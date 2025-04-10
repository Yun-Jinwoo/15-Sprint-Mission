import { useState, useEffect } from "react";
import { getProducts } from "../../../../../src/api.js";
import Item from "../Item/Item";
import Pagination from "../Pagination/Pagination.jsx";
import "./AllItems.css";

import search from "../../../../assets/images/search.svg";

const AllItems = () => {
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function getItems() {
      const data = await getProducts({
        page: currentPage,
        pageSize: 10,
        orderBy: "recent",
      });
      setItems(data.list);
      setTotalCount(data.totalCount);
    }

    getItems();
  }, [currentPage]);

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
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalCount={totalCount}
          pageSize={10}
        />
      </div>
    </>
  );
};

export default AllItems;
