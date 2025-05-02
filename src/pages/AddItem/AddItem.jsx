import { useState } from "react";
import Header from "../../components/Header";
import "./AddItem.css";
import upload from "../../assets/images/upload.svg";

const AddItem = () => {
  const [imageUrl, setImageUrl] = useState(null);

  function handleImageUpload(event) {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  }

  return (
    <>
      <Header />
      <div className="add-item">
        <div className="register">
          상품 등록하기
          <button>등록</button>
        </div>
        <div className="info-section">
          <div className="image-section">
            상품 이미지
            <div className="upload-section">
              <label htmlFor="upload-input" className="upload-button">
                <div className="image-upload">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                    id="upload-input"
                  />
                  <img src={upload} alt="+" className="upload-img" />
                  <span>이미지 등록</span>
                </div>
              </label>
              {imageUrl && (
                <div className="image-uploaded">
                  <img src={imageUrl} alt="상품이미지" />
                  <button className="delete-button" />
                </div>
              )}
            </div>
          </div>
          <div className="name-section">
            상품명
            <input className="name-input" placeholder="상품명을 입력하세요" />
          </div>
          <div className="description-section">
            상품 소개
            <textarea
              className="description-input"
              placeholder="상품 소개를 입력해주세요"
            />
          </div>
          <div className="price-section">
            판매가격
            <input
              className="price-input"
              placeholder="판매 가격을 입력해주세요"
            />
          </div>
          <div className="tag-section">
            태그
            <div className="show-tag">
              <input className="tag-input" placeholder="태그를 입력해주세요" />
              <div className="tag-list">
                <ul>
                  <li>
                    #티셔츠
                    <button className="delete-button" />
                  </li>
                  <li>
                    #상의
                    <button className="delete-button" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItem;
