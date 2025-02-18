import React from "react";
import { Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import EventList from "./EventList";

function App() {
  return (
    <>
      Hello Yura
      <Routes>
        <Route path="/events" element={<EventList />} />
      </Routes>
    </>
  );
}

export default App;
