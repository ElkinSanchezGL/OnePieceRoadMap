import React from "react";
import { Tooltip } from "react-tooltip";
import pirateStatic from "../assets/Map/OnepieceGif.png";
import pirateGif from "../assets/Map/OnepieceGif.gif";

interface MapMarkerProps {
  name: string;
  coords: { x: number; y: number };
  path: string;
  index: number;
  onNavigate: (path: string) => void;
}

export const MapMarker: React.FC<MapMarkerProps> = ({
  name,
  coords,
  path,
  index,
  onNavigate,
}) => {
  const handleActivation = () => onNavigate(path);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleActivation();
    }
  };

  return (
    <div
      tabIndex={0}
      role="link"
      aria-label={`Ir a la saga de ${name}`}
      className="absolute cursor-pointer group rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75"
      style={{
        top: `calc(${coords.y * 100}% - 30px)`,
        left: `calc(${coords.x * 100}% - 30px)`,
        width: "60px",
        height: "60px",
      }}
      onClick={handleActivation}
      onKeyDown={handleKeyDown}
      data-tooltip-id={`tooltip-map-${index}`}
      data-tooltip-content={name}
      data-tooltip-place="top"
    >
      <img
        src={pirateStatic}
        className="w-full h-full transition-opacity duration-200 group-hover:opacity-0 absolute top-0 left-0"
      />
      <img
        src={pirateGif}
        className="w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      />
      <Tooltip id={`tooltip-map-${index}`} />
    </div>
  );
};
