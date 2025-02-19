const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    title: String,
    importance: Number, // 중요도 (1~5)
    repImgFileName: String,
    repImgFileType: String,
    description: String, //long
    category: Number, // 개발/활동 영역  ( 1: 개발언어, 2: 응용지식, 3: 프로젝트, 4: 개발자 협업, 5: 개발 환경 , 6: 도메인)
    eventType: Number, // 활동분류
    startDate: String,
    endDate: String,
    descImagesList: [{ fileName: String, fileType: String, desc: String }],
    keyWord: String,
    pathKey: String,
  },
  { collection: "Events" }
);

const Event = mongoose.model("Event", EventSchema);

module.exports = { Event };
