import axios from "axios";
import React, { useEffect, useState } from "react";
import PhotoAlbumView from "../../components/event/PhotoAlbumView";

function EventView() {
  const [events, setEvents] = useState([]);
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
  return <PhotoAlbumView events={events} />;
}

export default EventView;
