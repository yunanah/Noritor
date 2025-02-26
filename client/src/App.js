import React from "react";
import { Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import EventList from "./EventList";
import EventView from "./pages/EventView";
import EventDetailView from "./pages/EventDetailView";
import Header from "./components/base/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<EventView />} />
        <Route path="/event">
          <Route path=":keyword/:ord?" element={<EventDetailView />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
