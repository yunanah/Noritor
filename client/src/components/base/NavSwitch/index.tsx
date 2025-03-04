import React from "react";
import "./index.scss";
import { ViewType } from "../../../stores/event";

type NavSwithProp = {
  onClick: Function;
};

function NavSwitch(props: NavSwithProp) {
  return (
    <div className="switch">
      {/* TODO: 글씨 => 아이콘으로 변경  */}
      <span onClick={() => props.onClick(ViewType.RESUME)}>이력서</span>
      <span onClick={() => props.onClick(ViewType.PHOTO_ALBUM)}>포토</span>
      <span onClick={() => props.onClick(ViewType.KEYWORD_CLOUD)}>키클</span>
    </div>
  );
}

export default NavSwitch;
