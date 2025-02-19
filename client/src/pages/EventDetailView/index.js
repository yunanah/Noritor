import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function EventDetailView() {
  const params = useParams();

  useEffect(() => {
    console.log(params);
    axios
      .post("/event/detail", { keyword: params.keyword })
      .then((response) => {
        if (response.data.success) {
          console.log(response.data);
        }
      });
  }, []);
  return <div>EventDetailView</div>;
}

export default EventDetailView;
