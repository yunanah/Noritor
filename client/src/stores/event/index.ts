import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { EventItem, WorkItem } from "../../types/event";
import { defaultEventsData, DefaultWorkData } from "../../constants";
// import { ViewType } from "../../pages/EventView";

interface EventStoreType {
  viewType: ViewType;
  events: EventItem[];
  works: WorkItem[];
  setEvents: (val: EventItem[]) => void;
  changeType: (val: ViewType) => void;
}

export enum ViewType {
  PHOTO_ALBUM = "photo-album-view",
  KEYWORD_CLOUD = "keyword-cloud-view",
  RESUME = "resume-view",
}

const EventStore = create<EventStoreType>((set) => ({
  events: defaultEventsData,
  works: DefaultWorkData,
  viewType: ViewType.PHOTO_ALBUM,
  setEvents: (val: EventItem[]) => set({ events: val }),
  changeType: (val: ViewType) => set(() => ({ viewType: val })),
}));

const useEventStore = EventStore;

export default useEventStore;
