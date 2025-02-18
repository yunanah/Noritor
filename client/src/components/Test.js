import React, { useEffect } from "react";
import axios from "axios";

function Test() {
  useEffect(() => {
    let body = {
      text: "안녕~~~~",
    };
    axios
      .post("/test", body)
      .then((response) => {
        alert("요청 성공");
        console.log(response);
      })
      .catch((err) => {
        alert("요청 실패");
        console.log(err);
      });
    return;
  }, []);
  return <div>Test</div>;
}

export default Test;
