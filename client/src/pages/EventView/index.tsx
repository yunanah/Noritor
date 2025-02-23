import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import PhotoAlbumView from "../../components/event/PhotoAlbumView";
import NavSwitch from "../../components/base/NavSwitch";
import KeywordCloudView from "../../components/event/KeywordCloudView";

export enum ViewType {
  PHOTO_ALBUM = "photo-album-view",
  KEYWORD_CLOUD = "keyword-cloud-view",
}

function EventView() {
  const [events, setEvents] = useState([]);
  const [viewType, setViewType] = useState(ViewType.PHOTO_ALBUM);

  const [photoAlbumView, wordCloudView] = useMemo(() => {
    return [
      viewType === ViewType.PHOTO_ALBUM,
      viewType === ViewType.KEYWORD_CLOUD,
    ];
  }, [viewType]);

  useEffect(() => {
    axios
      .post("/event/list")
      .then((response) => {
        if (response.data.success) {
          setEvents(response.data.eventList);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const switchPageView = () => {
    if (viewType === ViewType.PHOTO_ALBUM) setViewType(ViewType.KEYWORD_CLOUD);
    else setViewType(ViewType.PHOTO_ALBUM);
  };

  return (
    <section className="page-container">
      {photoAlbumView ? (
        <PhotoAlbumView events={events} />
      ) : (
        <KeywordCloudView events={events} />
      )}

      <NavSwitch onClick={() => switchPageView()} />
    </section>
  );
}

export default EventView;
