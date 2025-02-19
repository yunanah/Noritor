import React, { useEffect, useState } from "react";
import "./PhotoAlbumView.scss";

function PhotoAlbumView(props) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    let tempArr = [];
    props?.events?.forEach((event, index) => {
      tempArr.push(...event.descImaegsList);
    });

    setPhotos(tempArr);
    console.log(props.events, tempArr);
  }, [props]);

  // 이미지경로 필요에 맞게 변환 및 파일 import
  // TODO: 근데 함수로 빼니가 좀 더 느려진 거 같다..?
  const loadImage = (path) => {
    return require(`../../assets/images/event/${path.replace("JPG", "jpg")}`);
  };

  const goToDetailPage = () => {
    //
  };

  return (
    <section className="album-container">
      {photos.map((photo, idx) => {
        return (
          <div className="img-container" onClick={goToDetailPage}>
            <img
              src={loadImage(photo.fileName)}
              alt={`유레이팅 추억 ${idx + 1}번째 등록된 이미지`}
            />
          </div>
        );
      })}
    </section>
  );
}

export default PhotoAlbumView;
