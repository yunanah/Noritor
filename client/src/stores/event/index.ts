import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { EventItem } from "../../types/event";
// import { ViewType } from "../../pages/EventView";

interface EventStoreType {
  viewType: ViewType;
  events: EventItem[];
  setEvents: (val: EventItem[]) => void;
  changeType: (val: ViewType) => void;
}

export enum ViewType {
  PHOTO_ALBUM = "photo-album-view",
  KEYWORD_CLOUD = "keyword-cloud-view",
}

const EventStore = create<EventStoreType>((set) => ({
  events: [],
  viewType: ViewType.PHOTO_ALBUM,
  setEvents: (val: EventItem[]) => set({ events: val }),
  changeType: (val: ViewType) => set(() => ({ viewType: val })),
}));

const useEventStore = EventStore;

export default useEventStore;
