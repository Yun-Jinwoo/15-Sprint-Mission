import logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/login");
  };
  return (
    <>
      <header className="Header">
        <div className="header-left">
          <Link to={"/"}>
            <img src={logo} alt="판다마켓 로고" />
          </Link>
          <div className="link-section">
            <Link to={"/boards"}>자유게시판</Link>
            <Link to={"/items"}>중고마켓</Link>
          </div>
        </div>
        <button onClick={onClickButton} className="login-button">
          로그인
        </button>
      </header>
    </>
  );
};

export default Header;
