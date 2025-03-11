import React from "react";
import { useQuery } from "react-query";
import useEventStore from "../stores/event";
import { defaultEventsData } from "../constants";
type ImageComponentParam = { imageUrl: string; className?: string };

// date를 yyyy.mm 형태로 변환
const dateFormat = (date: string) => {
  let timeData = new Date(
    Number(date.substring(0, 4)),
    Number(date.substring(4, 6))
  );

  return `${timeData.getFullYear()}.${String(timeData.getMonth()).padStart(
    2,
    "0"
  )}`;
};

const PhotoImgComponent = ({
  imageUrl,
  className = "",
}: ImageComponentParam) => {
  const { data: image, isLoading } = useQuery(["image", imageUrl], () =>
    fetch(imageUrl).then((res) => res.blob())
  );

  if (isLoading || !image)
    return React.createElement(
      "div",
      { className: "img-loading" },
      "Loading..."
    );
  //   <div className="img-loading">Loading...</div>;

  return React.createElement("img", {
    src: URL.createObjectURL(image),
    className: className,
    alt: `${imageUrl}`,
  });
  //   return<img src={URL.createObjectURL(image)} alt={`${imageUrl}`} />;
};

const findEventData = (keyword: string) => {
  return defaultEventsData.filter((data) => data.keyWord === keyword);
};

export { dateFormat, PhotoImgComponent, findEventData };
