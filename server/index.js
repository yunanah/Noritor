const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Event } = require("./Model/Event");

app.listen(port, () => {
  mongoose
    .connect(
      "mongodb+srv://yunanah:dbfk4524L!@cluster0.yniez.mongodb.net/Yurator?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log(`App listening on port ${port}`);
      console.log("Connecting MongoDB...");
    })
    .catch((err) => {
      console.log(`${err}`);
    });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.post("/test", (req, res) => {
  // 생성 , 저장
  // const CommunityPost = new Event({ title: "", description: "~~~~" });
  // CommunityPost.save().then(() => {
  console.log(req.body);
  res.status(200).json({ success: true });
  // });
});

app.post("/event/list", (req, res) => {
  Event.find()
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, eventList: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});
