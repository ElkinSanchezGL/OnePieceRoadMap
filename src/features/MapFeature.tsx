import React from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import image from "../assets/Map/map_one_piece.png";

export const Map = () => {
  const navigate = useNavigate();

  const locations = [
    { name: "East Blue", top: "25%", left: "75%", path: "/sagas/east-blue" },
    { name: "Alabasta", top: "53%", left: "70.5%", path: "/sagas/arabasta" },
    { name: "Skypiea", top: "58%", left: "77%", path: "/sagas/skypiea" },
    { name: "Water 7", top: "52.5%", left: "83.5%", path: "/sagas/water-seven" },
    { name: "Thriller Bark", top: "72%", left: "31.2%", path: "/sagas/thriller-bark" },
    { name: "Marineford", top: "58.5%", left: "92.6%", path: "/sagas/marineford" },
    { name: "Isla Gyojin", top: "53.1%", left: "97.3%", path: "/sagas/isla-gyojin" },
    { name: "Dressrosa", top: "55%", left: "16.6%", path: "/sagas/dressrosa" },
    { name: "Whole Cake", top: "56.4%", left: "29.2%", path: "/sagas/whole-cake" },
    { name: "Wano", top: "49%", left: "24%", path: "/sagas/wano" },
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
            className="absolute w-3.5 h-3.5 bg-red-600 rounded-full cursor-pointer hover:scale-125 transition-transform border-2 border-white"
            style={{ top: loc.top, left: loc.left }}
            data-tooltip-id={`tip-${index}`}
            data-tooltip-content={loc.name}
            onClick={() => navigate(loc.path)}
          >
            <Tooltip id={`tip-${index}`} place="top" />
          </div>
        ))}
      </div>
    </div>
  );
};
