import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./index.scss";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { findEventData } from "../../utils";

function EventDetailView() {
  //TODO: 사진 인덱스까지 파라미터로 넘겨서 들어오면 바로 그 사진 보이게 설정
  const { keyword, ord } = useParams();
  const [eventData, setEventData] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [currIdx, setCurrIdx] = useState(0);

  useEffect(() => {
    // axios.post("/event/detail", { keyword: keyword }).then((response) => {
    //   if (response.data.success) {
    //     setEventData(response.data?.eventList[0]);
    //     setImageList(response.data?.eventList[0]?.descImaegsList);
    //   }
    // });
    if (!eventData) {
      setEventData(findEventData(keyword)?.[0]);
      setImageList(findEventData(keyword)?.[0]?.descImaegsList);
    }
  }, []);

  const loadImage = (path) => {
    return `${process.env.PUBLIC_URL}/assets/images/event/${path.replace(
      "JPG",
      "jpg"
    )}`;
  };

  return (
    <section className="detail-page-container">
      {/* TODO: 상세페이지 진입시 status 동기화 안됨 */}
      <Carousel
        className="carousel_"
        selectedItem={ord ?? 0}
        showArrows={false}
        centerMode={true}
        showThumbs={true}
        showStatus={true}
        infiniteLoop={false}
        centerSlidePercentage={100}
        onChange={(currentIdx, item) => {
          setCurrIdx(currentIdx);
          console.log(currIdx);
        }}
      >
        {imageList?.map((content, index) => (
          <div key={index} className="carousel-content">
            <img
              src={loadImage(content.fileName)}
              alt={`${index + 1}번째 이미지`}
            />
          </div>
        ))}
      </Carousel>

      {/* TODO: 텍스트 부분만 바텀에서 살짝 올라와서 보였으면 좋을 듯. (슬라이더 부분은 고정시키고 ) */}
      <div className="title-container">
        <strong className="title">{imageList?.[currIdx]?.desc}</strong>
      </div>
      <p className="description">
        {eventData?.description.split("^").map((info, index) => info + "  ")}
      </p>
    </section>
  );
}

export default EventDetailView;
