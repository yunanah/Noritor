import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./index.scss";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function EventDetailView() {
  const { keyword } = useParams();
  const [imageList, setImageList] = useState([]);
  const [currIdx, setCurrIdx] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios.post("/event/detail", { keyword: keyword }).then((response) => {
      if (response.data.success) {
        setImageList(response.data?.eventList[0]?.descImaegsList);
      }
    });
  }, []);

  const loadImage = (path) => {
    return require(`../../assets/images/event/${path.replace("JPG", "jpg")}`);
  };

  return (
    <>
      <Carousel
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

      <div>{imageList?.[currIdx]?.desc}</div>
    </>
  );
}

export default EventDetailView;
