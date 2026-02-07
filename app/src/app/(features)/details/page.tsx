"use client";
import { useVietnamMapStore } from "@/app/store/vietnam-map-store";
import React, { useEffect } from "react";
export default function Details() {
  const { visitedLocations } = useVietnamMapStore();

  return (
    <div>
      <h1>Visited Locations</h1>
      <ul>
        {visitedLocations?.map((location) => (
          <li key={location}>{location}</li>
        ))}
      </ul>
    </div>
  );
}
