import React from "react";
import "./index.scss";

type NavSwithProp = {
  onClick: Function;
};

function NavSwitch(props: NavSwithProp) {
  return (
    <div className="switch" onClick={() => props.onClick()}>
      MODE
    </div>
  );
}

export default NavSwitch;
