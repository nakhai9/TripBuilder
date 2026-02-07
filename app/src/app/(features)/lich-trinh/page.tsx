"use client";

import { useVietnamMapStore } from "@/app/store/vietnam-map-store";
import MainLayout from "@/app/ui/layout/MainLayout";

export default function TravelPlan() {
  const { selectedLocations } = useVietnamMapStore();
  return (
    <MainLayout>
      <div>
        <p>Các bước tạo lịch trình section (tham khảo)</p>
      </div>
      <div>
        <p>Những nơi sắp đến</p>
        {!!selectedLocations.length &&
          selectedLocations
            .filter((loc) => loc.status === "UPCOMING")
            .map((x) => <div key={x.codeName}>{x.name}</div>)}
      </div>
      <div>
        <p>Những nơi đã đến</p>
        {!!selectedLocations.length &&
          selectedLocations
            .filter((loc) => loc.status === "VISITED")
            .map((x) => <div key={x.codeName}>{x.name}</div>)}
      </div>
    </MainLayout>
  );
}
