import React from "react";
import { Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import EventList from "./EventList";
import EventView from "./pages/EventView";

function App() {
  return (
    <>
      Hello Yura
      <Routes>
        <Route path="/events" element={<EventView />} />
      </Routes>
    </>
  );
}

export default App;
