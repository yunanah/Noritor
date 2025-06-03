import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();

  const goMain = () => {
    navigate("/");
  };
  return (
    <div className="header" onClick={() => goMain()}>
      <div className="name">
        <span className="key">Y</span>
        <span className="key">U</span>
        <span className="key">R</span>
        <span className="key">A</span>
        <span className="key">T</span>
        <span className="key">O</span>
        <span className="key">R</span>
      </div>

      <div></div>
    </div>
  );
}

export default Header;
