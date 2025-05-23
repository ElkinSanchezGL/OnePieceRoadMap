import React from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import image from "../assets/Map/map_one_piece.png";
import pirateStatic from "../assets/Map/OnepieceGif.png";
import pirateGif from "../assets/Map/OnepieceGif.gif";

export const Map = () => {
  const navigate = useNavigate();

  const locations = [
    { name: "East Blue", coords: { x: 0.75, y: 0.30 }, path: "/sagas/east-blue" },
    { name: "Alabasta", coords: { x: 0.705, y: 0.54 }, path: "/sagas/arabasta" },
    { name: "Skypiea", coords: { x: 0.77, y: 0.59}, path: "/sagas/skypiea" },
    { name: "Water 7", coords: { x: 0.835, y: 0.519 }, path: "/sagas/water-seven" },
    { name: "Thriller Bark", coords: { x: 0.313, y: 0.72 }, path: "/sagas/thriller-bark" },
    { name: "Marineford", coords: { x: 0.933, y: 0.56 }, path: "/sagas/marineford" },
    { name: "Isla Gyojin", coords: { x: 0.967, y: 0.52 }, path: "/sagas/isla-gyojin" },
    { name: "Dressrosa", coords: { x: 0.17, y: 0.546 }, path: "/sagas/dressrosa" },
    { name: "Whole Cake", coords: { x: 0.295, y: 0.57 }, path: "/sagas/whole-cake" },
    { name: "Wano", coords: { x: 0.24, y: 0.49 }, path: "/sagas/wano" },
  ];

  return (
    <div className="w-full h-screen overflow-auto bg-gray-200">
      <div
        className="relative aspect-[2560/1748]"
        style={{
          minWidth: '100%',
          minHeight: '100%',
        }}
      >
        <img
          src={image}
          alt="Mapa interactivo del mundo de One Piece" 
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
        
        {locations.map((loc, index) => {
          const handleActivation = () => {
            navigate(loc.path);
          };

          const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              handleActivation();
            }
          };

          return (
            <div
              key={index}
              tabIndex={0} 
              role="link" 
              aria-label={`Ir a la saga de ${loc.name}`} 
              className="absolute cursor-pointer group rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75" // Estilos de foco y redondeado para el anillo
              style={{
                top: `calc(${loc.coords.y * 100}% - 20px)`, 
                left: `calc(${loc.coords.x * 100}% - 20px)`,
                width: '40px', 
                height: '40px',
              }}
              onClick={handleActivation}
              onKeyDown={handleKeyDown} 
              data-tooltip-id={`tooltip-map-${index}`}
              data-tooltip-content={loc.name}
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
        })}
      </div>
    </div>
  );
};