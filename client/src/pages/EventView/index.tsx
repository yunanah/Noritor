import axios from "axios";
import React, { useEffect, useMemo } from "react";
import PhotoAlbumView from "../../components/event/PhotoAlbumView";
import NavSwitch from "../../components/base/NavSwitch";
import KeywordCloudView from "../../components/event/KeywordCloudView";
import useEventStore from "../../stores/event";
import ResumeView from "../../components/event/ResumeView";

export enum ViewType {
  PHOTO_ALBUM = "photo-album-view",
  KEYWORD_CLOUD = "keyword-cloud-view",
  RESUME = "resume-view",
}

function EventView() {
  const { viewType, changeType, events, setEvents } = useEventStore();

  const [photoAlbumView, wordCloudView, resumeView] = useMemo(() => {
    return [
      viewType === ViewType.PHOTO_ALBUM,
      viewType === ViewType.KEYWORD_CLOUD,
      viewType === ViewType.RESUME,
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

  const switchPageView = (type: ViewType) => {
    if (type === ViewType.PHOTO_ALBUM) changeType(ViewType.PHOTO_ALBUM);
    else if (type === ViewType.KEYWORD_CLOUD)
      changeType(ViewType.KEYWORD_CLOUD);
    else if (type === ViewType.RESUME) changeType(ViewType.RESUME);
  };

  return (
    <section className="page-container">
      {!photoAlbumView ? (
        resumeView ? (
          <ResumeView />
        ) : (
          <KeywordCloudView events={events} />
        )
      ) : (
        <PhotoAlbumView events={events} />
      )}

      <NavSwitch onClick={(type: any) => switchPageView(type)} />
    </section>
  );
}

export default EventView;
