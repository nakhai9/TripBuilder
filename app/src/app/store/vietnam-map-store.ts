import { create } from "zustand";
import { OLD_VIETNAM_MAP } from "../data/old-vietnam-map";
import { NEW_VIETNAM_MAP } from "../data/new-vietnam-map";

type VietnamMapStore = {
  isNewMap: boolean;
  loading: boolean;
  map: any;
  currentMap: any;
  // visited locations
  visitedLocations?: string[];
  switchToMap: () => void;
  setVisitedLocations: (locations: string[]) => void;
};

export const useVietnamMapStore = create<VietnamMapStore>((set) => ({
  isNewMap: false,
  loading: false,
  map: {
    old: {
      data: OLD_VIETNAM_MAP,
      count: OLD_VIETNAM_MAP.length,
    },
    new: {
      data: NEW_VIETNAM_MAP,
      count: NEW_VIETNAM_MAP.length,
    },
  },
  currentMap: NEW_VIETNAM_MAP,
  switchToMap: () =>
    set((state) => ({
      loading: true,
      isNewMap: !state.isNewMap,
      currentMap: state.isNewMap ? state.map.old.data : state.map.new.data,
    })),

  setVisitedLocations: (locations: string[]) =>
    set(() => ({
      visitedLocations: locations,
    })),
}));
