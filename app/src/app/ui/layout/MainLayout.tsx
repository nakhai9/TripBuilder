"use client";

import Modal from "@/app/components/Modal";
import { useGlobalStore } from "@/app/store/global-store";
import { useVietnamMapStore } from "@/app/store/vietnam-map-store";
import { Backdrop, CircularProgress } from "@mui/material";
import clsx from "clsx";
import { Map, MapPinned } from "lucide-react";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const { isLoading, description, setIsLoading, setConfiguration } =
    useGlobalStore();
  const open = false;
  const {
    switchToMap,
    updateSelectedLocations,
    resetMap,
    currentMap,
    isNewMap,
    selectedLocations,
  } = useVietnamMapStore();

  const onSwitchToMap = () => {
    setIsLoading(true);
    setConfiguration({ description: "Đang nạp dữ liệu bản đồ" });
    switchToMap();
    setIsLoading(false);
  };
  return (
    <div className="relative flex flex-col min-h-screen font-sans">
      <div className="top-0 left-0 z-50 fixed flex bg-white w-full">
        <div className="flex justify-between items-center bg-white mx-auto px-4 md:px-0 w-full md:w-5xl h-14">
          <h1 className="font-medium text-amber-600 text-xl md:text-3xl">
            GoVietnam
          </h1>
          <div className="flex gap-4">
            {!selectedLocations.length && (
              <button
                className={clsx(
                  "hidden md:flex items-center gap-2 hover:bg-amber-50 px-4 border border-amber-600 rounded-md h-10 text-amber-600 text-xs md:text-sm icon",
                  selectedLocations.length > 0
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer",
                )}
                type="button"
                onClick={onSwitchToMap}
                disabled={selectedLocations.length > 0}
              >
                <Map />
                <p>
                  Xem bản đồ{" "}
                  <span className="font-semibold">
                    {isNewMap ? "trước" : "sau"}
                  </span>{" "}
                  sáp nhập
                </p>
              </button>
            )}
            {!selectedLocations.length && (
              <button
                className={clsx(
                  "md:hidden flex items-center gap-2 hover:bg-amber-50 px-4 border border-amber-600 rounded-md h-8 md:h-10 text-amber-600 text-xs md:text-sm icon",
                  selectedLocations.length > 0
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer",
                )}
                type="button"
                onClick={onSwitchToMap}
                disabled={selectedLocations.length > 0}
              >
                <MapPinned size={20} /> Chuyển bản đồ
              </button>
            )}
          </div>
        </div>
      </div>
      <main className="mx-auto mt-8 w-full md:w-5xl">{children}</main>
      {open && <Modal />}
      <Backdrop
        sx={{
          zIndex: 9999,
        }}
        open={isLoading}
      >
        <div className="flex flex-col items-center gap-4">
          <CircularProgress color="warning" />
          {description && (
            <p className="px-4 text-white text-center">{description}</p>
          )}
        </div>
      </Backdrop>
    </div>
  );
}
