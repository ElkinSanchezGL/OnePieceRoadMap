import React from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import image from "../assets/Map/map_one_piece.png";
import pirateStatic from "../assets/Map/OnepieceGif.png";
import pirateGif from "../assets/Map/OnepieceGif.gif";

export const Map = () => {
  const navigate = useNavigate();

  const locations = [
    { name: "East Blue", coords: { x: 0.75, y: 0.25 }, path: "/sagas/east-blue" },
    { name: "Alabasta", coords: { x: 0.705, y: 0.52 }, path: "/sagas/arabasta" },
    { name: "Skypiea", coords: { x: 0.77, y: 0.56 }, path: "/sagas/skypiea" },
    { name: "Water 7", coords: { x: 0.835, y: 0.515 }, path: "/sagas/water-seven" },
    { name: "Thriller Bark", coords: { x: 0.303, y: 0.72 }, path: "/sagas/thriller-bark" },
    { name: "Marineford", coords: { x: 0.923, y: 0.55 }, path: "/sagas/marineford" },
    { name: "Isla Gyojin", coords: { x: 0.967, y: 0.52 }, path: "/sagas/isla-gyojin" },
    { name: "Dressrosa", coords: { x: 0.16, y: 0.536 }, path: "/sagas/dressrosa" },
    { name: "Whole Cake", coords: { x: 0.286, y: 0.55 }, path: "/sagas/whole-cake" },
    { name: "Wano", coords: { x: 0.23, y: 0.48 }, path: "/sagas/wano" },
  ];

  return (
    <div className="w-full h-screen overflow-auto">
      <div className="relative w-full max-w-none aspect-[2560/1748] mx-auto">
        <img
          src={image}
          alt="One Piece Map"
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
        {locations.map((loc, index) => (
          <div
            key={index}
            className="absolute cursor-pointer group"
            style={{
              top: `${loc.coords.y * 100}%`,
              left: `${loc.coords.x * 100}%`,
            }}
            onClick={() => navigate(loc.path)}
            data-tooltip-id={`tip-${index}`}
            data-tooltip-content={loc.name}
          >
            <img
              src={pirateStatic}
              alt={loc.name}
              className="w-8 h-8 transition-opacity duration-200 group-hover:opacity-0 absolute"
            />
            <img
              src={pirateGif}
              alt={`${loc.name} Animated`}
              className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            />
            <Tooltip id={`tip-${index}`} place="top" />
          </div>
        ))}
      </div>
    </div>
  );
};
