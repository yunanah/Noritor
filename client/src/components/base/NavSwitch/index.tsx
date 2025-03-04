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
      <img
        src={require("../../../assets/icons/view/resume.svg").default}
        onClick={() => props.onClick(ViewType.RESUME)}
        alt="이력서"
      />
      |
      <img
        src={require("../../../assets/icons/view/photoalbum.svg").default}
        onClick={() => props.onClick(ViewType.PHOTO_ALBUM)}
        alt="포토앨범"
      />
      |
      <img
        src={require("../../../assets/icons/view/wordcloud.svg").default}
        onClick={() => props.onClick(ViewType.KEYWORD_CLOUD)}
        alt="키워드클라우드"
      />
    </div>
  );
}

export default NavSwitch;
