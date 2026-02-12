"use client";

import { useEffect, useRef, useState } from "react";
import { LocationInfo, LocationModel } from "../model";
import { useVietnamMapStore } from "../store/vietnam-map-store";
import useMousePosition from "../hooks/useMousePosition";

type VietnamMapProps = {
  locationIds?: string[];
  locations?: LocationInfo[];
  onClick?: (location: LocationInfo) => void;
  zoomToElement?: (
    node: string | HTMLElement,
    scale?: number,
    animationTime?: number,
    animationType?:
      | "easeOut"
      | "linear"
      | "easeInQuad"
      | "easeOutQuad"
      | "easeInOutQuad"
      | "easeInCubic"
      | "easeOutCubic"
      | "easeInOutCubic"
      | "easeInQuart"
      | "easeOutQuart"
      | "easeInOutQuart"
      | "easeInQuint"
      | "easeOutQuint"
      | "easeInOutQuint",
  ) => void;
};

export default function VietnamMap({
  locationIds = [],
  locations = [],
  onClick,
  zoomToElement,
}: VietnamMapProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const currentMap = useVietnamMapStore((state) => state.currentMap);
  const { x, y } = useMousePosition();
  const [text, setText] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleClick = (item: LocationModel) => {
    if (item.codeName)
      onClick?.({
        codeName: item.codeName,
        name: item.name,
        status: locations.find((loc) => loc.codeName === item.codeName)?.status,
      });
  };

  return (
    <div className="relative">
      <div
        id="vietnam-map-wrapper"
        className="flex justify-center"
        ref={wrapperRef}
      >
        <svg
          viewBox="0 0 800 800"
          className="w-[500px] sm:w-[400px] md:w-[600px] h-[500px] sm:h-[400px] md:h-[600px] select-none"
          xmlns="http://www.w3.org/2000/svg"
          id="vietnam-map-svg"
        >
          <g className="group-state">
            {currentMap.map((item: LocationModel) => (
              <g
                key={item.codeName}
                dangerouslySetInnerHTML={{ __html: item.svgData }}
                fill={
                  locations.some(
                    (location) =>
                      location.codeName === item.codeName &&
                      location.status === "VISITED",
                  )
                    ? "#BB4D00"
                    : locations.some(
                          (location) =>
                            location.codeName === item.codeName &&
                            location.status === "UPCOMING",
                        )
                      ? "#836FFF"
                      : "#FE9A00"
                }
                style={{ cursor: "pointer" }}
                onClick={() => handleClick(item)}
                onMouseEnter={() => setText(item.name)}
                onMouseLeave={() => setText(null)}
              />
            ))}
          </g>
        </svg>
      </div>
      <div
        id="state-tooltip"
        className="hidden md:block z-50 fixed text-sm pointer-events-none"
        style={{
          position: "fixed",
          display: text ? "block" : "none",
          background: "rgba(0, 0, 0, 0.8)",
          padding: "6px 10px",
          borderRadius: "4px",
          color: "white",
          lineHeight: "14px",
          left: `${x + 12}px`,
          top: `${y + 12}px`,
        }}
      >
        {text}
      </div>
    </div>
  );
}
