import React, { useEffect, useState } from "react";

import "./PhotoAlbumView.scss";
import { useNavigate } from "react-router-dom";
import { ImageDescItem, PhotoAlbumViewProp } from "../../types/event";
import { PhotoImgComponent } from "../../utils";

type ImageDescItemWithKeyword = ImageDescItem & {
  keyword: string;
  imgOrd: number;
};

function PhotoAlbumView(props: PhotoAlbumViewProp) {
  const [photos, setPhotos] = useState<ImageDescItemWithKeyword[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 타입 지정 필요
    let tempArr: any[] = [];
    props?.events?.forEach((event, index) => {
      // 이미지 목록에는 키워드 속성이 없어서 데이터 가공 후 push
      tempArr.push(
        ...event.descImaegsList.map((item, idx) => {
          return { ...item, keyword: event.keyWord, imgOrd: idx };
        })
      );
    });

    setPhotos(tempArr);
  }, [props]);

  // 이미지경로 필요에 맞게 변환 및 파일 import
  // TODO: 근데 함수로 빼니가 좀 더 느려진 거 같다..?
  const loadImage = (path: string) => {
    return `${process.env.PUBLIC_URL}/assets/images/event/${path.replace(
      "JPG",
      "jpg"
    )}`;
  };

  const goToDetailPage = (keyword: string, ord: number) => {
    // 키워드에 해당하는 경험의 상세 페이지로 이동
    navigate(`/event/${keyword.replace(" ", "")}/${ord}`);
  };

  return (
    <>
      <section className="album-container">
        {photos.map((photo, idx) => {
          return (
            <div
              key={idx}
              className="img-container"
              onClick={() => goToDetailPage(photo.keyword, photo.imgOrd)}
            >
              <PhotoImgComponent imageUrl={loadImage(photo.fileName)} />
              {/* <img
                src={loadImage(photo.fileName)}
                alt={`유레이팅 추억 ${idx + 1}번째 등록된 이미지`}
              /> */}
            </div>
          );
        })}
      </section>
    </>
  );
}

export default PhotoAlbumView;
