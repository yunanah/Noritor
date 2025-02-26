import React from "react";
import "./index.scss";

type NavSwithProp = {
  onClick: Function;
};

function NavSwitch(props: NavSwithProp) {
  return (
    <div className="switch" onClick={() => props.onClick()}>
      {/* TODO: 글씨 => 아이콘으로 변경  */}
      MODE
    </div>
  );
}

export default NavSwitch;
