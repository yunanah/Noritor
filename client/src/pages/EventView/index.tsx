import axios from "axios";
import React, { useEffect, useMemo } from "react";
import PhotoAlbumView from "../../components/event/PhotoAlbumView";
import NavSwitch from "../../components/base/NavSwitch";
import KeywordCloudView from "../../components/event/KeywordCloudView";
import useEventStore from "../../stores/event";

export enum ViewType {
  PHOTO_ALBUM = "photo-album-view",
  KEYWORD_CLOUD = "keyword-cloud-view",
}

function EventView() {
  const { viewType, changeType, events, setEvents } = useEventStore();

  const [photoAlbumView, wordCloudView] = useMemo(() => {
    return [
      viewType === ViewType.PHOTO_ALBUM,
      viewType === ViewType.KEYWORD_CLOUD,
    ];
  }, [viewType]);

  useEffect(() => {
    if (events.length === 0) {
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
    }
  }, [viewType]);

  const switchPageView = () => {
    if (viewType === ViewType.PHOTO_ALBUM) changeType(ViewType.KEYWORD_CLOUD);
    else changeType(ViewType.PHOTO_ALBUM);
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
