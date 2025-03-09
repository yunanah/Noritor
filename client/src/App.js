import React from "react";
import { Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import EventList from "./EventList";
import EventView from "./pages/EventView";
import EventDetailView from "./pages/EventDetailView";
import Header from "./components/base/Header";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <Header />
        <Routes>
          <Route path="/" element={<EventView />} />
          <Route path="/event">
            <Route path=":keyword/:ord?" element={<EventDetailView />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
