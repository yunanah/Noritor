import React from "react";
import "./index.scss";
import { ViewType } from "../../../stores/event";

type NavSwithProp = {
  onClick: Function;
};

function NavSwitch(props: NavSwithProp) {
  const changeViewType = (type: ViewType) => {
    window.scrollTo(0, 0);
    props.onClick(type);
  };
  return (
    <div className="switch">
      {/* TODO: 글씨 => 아이콘으로 변경  */}
      <img
        src={`${process.env.PUBLIC_URL}/assets/icons/view/resume.svg`}
        onClick={() => changeViewType(ViewType.RESUME)}
        alt="이력서"
      />
      |
      <img
        src={`${process.env.PUBLIC_URL}/assets/icons/view/photoalbum.svg`}
        onClick={() => changeViewType(ViewType.PHOTO_ALBUM)}
        alt="포토앨범"
      />
      |
      <img
        src={`${process.env.PUBLIC_URL}/assets/icons/view/wordcloud.svg`}
        onClick={() => changeViewType(ViewType.KEYWORD_CLOUD)}
        alt="키워드클라우드"
      />
    </div>
  );
}

export default NavSwitch;
