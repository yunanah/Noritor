import axios from "axios";
import React, { useEffect, useState } from "react";

function EventList() {
  const [events, setEvents] = useState([]);
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
  }, []);
  return (
    <>
      <div>
        {events.map((event, index) => {
          return (
            <>
              <p key="index">{event.description}</p>;
              {/* TODO: 아무래도 이미지 용량이 좀 큰듯 ?.. 400KB 넘어가면 안나옴.... 300이하로 줄여야 할듯  */}
              <img
                key="index + '_'"
                alt="이미지"
                src={require(`./assets/images/event/${event.repImgFileName.replace(
                  "JPG",
                  "jpg"
                )}`)}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default EventList;
