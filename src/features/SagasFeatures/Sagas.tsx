import React, { useEffect, useState } from "react";
import Background from "../../components/Background";
import ButtonRedirect from "../../components/Button";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaHatCowboy } from "react-icons/fa";

import EastBlue from "../../assets/Sagas/PrincipalImages/Saga_East_Blue.png";
import Alabasta from "../../assets/Sagas/PrincipalImages/Arco_de_Arabasta.png";
import Skypiea from "../../assets/Sagas/PrincipalImages/Arco_de_Skypiea.png";
import WaterSeven from "../../assets/Sagas/PrincipalImages/Arco_de_Water_Seven.png";
import ThrillerBark from "../../assets/Sagas/PrincipalImages/Saga_de_Thriller_Bark.png";
import Marineford from "../../assets/Sagas/PrincipalImages/Saga_Marineford.png";

import GyojinIsland from "../../assets/Sagas/PrincipalImages/Saga_IslaGyojin..jpg";
import Dressrosa from "../../assets/Sagas/PrincipalImages/Saga_Dressrosa.png";
import WholeCake from "../../assets/Sagas/PrincipalImages/Saga_WholeCake.png";
import Wano from "../../assets/Sagas/PrincipalImages/Saga_Wano.png";

import GeneralOnepiece from "../../assets/GeneralImages/One_Piece.png";
import { getSagaById } from "../../services/getSagasById";

const sagaData = [
  {
    id: 1,
    image: EastBlue,
    route: "/sagas/east-blue",
    description:
      "Aquí empieza toda la historia y vemos los inicios de lo que será la tripulación de los Sombrero de Paja, empezando con la primera aventura de Luffy y cuando comienza a formarse el grupo antes de partir al Grand Line.",
  },
  {
    id: 2,
    image: Alabasta,
    route: "/sagas/arabasta",
    description:
      "Ya hemos entrado en el Grand Line y la banda sigue creciendo. Antes de continuar la búsqueda del One Piece, el grupo decide ayudar a la princesa Nefertari Vivi a detener la guerra civil que asola su país y detener a la banda de mercenarios conocida como Baroque Works.",
  },
  {
    id: 3,
    image: Skypiea,
    route: "/sagas/skypiea",
    description:
      "Tras dejar atrás Arabasta, el Log Pose de Nami comienza a apuntar en una dirección muy extraña: hacia arriba. Hay una isla en el cielo y los piratas del Going Merry no van a dejar pasar la oportunidad de visitarla, así que terminan en una tierra misteriosa con un conflicto que lleva varios años a punto de explotar.",
  },
  {
    id: 4,
    image: WaterSeven,
    route: "/sagas/water-seven",
    description:
      "Tras dejar atrás la isla del Cielo, el Merry necesita reparaciones urgentemente, así que el siguiente paso en el viaje es encontrar un carpintero que se una a la tripulación... Aunque por el camino los Sombreros de Paja se ven envueltos en una feroz competición contra otra tripulación pirata y en la búsqueda de un antiguo tesoro perdido",
  },
  {
    id: 5,
    image: ThrillerBark,
    route: "/sagas/thriller-bark",
    description:
      "Antes de llegar al Nuevo Mundo, la tripulación deben navegar por un extraño mar donde es muy fácil perderse para siempre. Terminan siendo capturados en la isla de Thriller Bark, que está plagada de zombies y un nuevo villano quiere arrebatarles sus sombras.",
  },
  {
    id: 6,
    image: Marineford,
    route: "/sagas/marineford",
    description:
      "Esta saga marca el final de la primera parte del anime antes del salto temporal. Si ya las cosas se habían ido poniendo cada vez más difíciles, la tripulación se separa en medio de un conflicto que escala muy rápido.",
  },
  {
    id: 7,
    image: GyojinIsland,
    route: "/sagas/isla-gyojin",
    description:
      "Tras un salto temporal de dos años, la tripulación de Luffy vuelve por fin a reunirse en el Archipiélago Sabaody para continuar su camino hacia el Nuevo Mundo... aunque antes deberán pasar por la isla de los hombres peces.",
  },
  {
    id: 8,
    image: Dressrosa,
    route: "/sagas/dressrosa",
    description:
      "Una de las sagas más largas de toda la historia y marca la entrada de lleno de los Piratas de Sombrero de Paja en el Nuevo Mundo. Es una región muy peligrosa donde nos encontramos con algunos de los piratas más feroces del Grand Line.",
  },
  {
    id: 9,
    image: WholeCake,
    route: "/sagas/whole-cake",
    description:
      "Los Sombrero de Paja consiguen reunirse en Zou y empiezan a hacer los planes necesarios para enfrentarse a Kaidou. Sin embargo, Sanji cae en las garras de Big Mom, una peligrosa pirata y una de los Cuatro Emperadores, por lo que la tripulación tendrá que meterse de lleno en su territorio para rescatar al cocinero.",
  },
  {
    id: 10,
    image: Wano,
    route: "/sagas/wano",
    description:
      "La saga más larga de toda la serie y que arrancó en 2019 para llevarnos a la tierra de los samurais. También conocida como la Saga de los Cuatro Emperadores, con una alianza masiva para derrotar a Kaido y el equilibrio de poderes en el mundo estando más frágil que nunca.",
  },
];

export const AllSagasTimeline = () => {
  const [titles, setTitles] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchTitles = async () => {
      for (const saga of sagaData) {
        try {
          const data = await getSagaById(saga.id);
          const title = data?.tittle || data?.title;
          if (title) {
            setTitles((prev) => ({ ...prev, [saga.id.toString()]: title }));
          } else {
            console.warn(`Saga ${saga.id} no tiene título válido`, data);
          }
        } catch (error) {
          console.error(`Error al cargar saga ${saga.id}:`, error);
        }
      }
    };

    fetchTitles();
  }, []);

  return (
    <Background image={GeneralOnepiece}>
      <div className="p-8 min-h-screen">
        <div className="flex justify-between items-center mb-4">
          <div></div>
          <ButtonRedirect text="Inicio" route="/" />
        </div>
        <h1 className="text-3xl font-bold mb-8 text-center drop-shadow-lg">Línea de tiempo completa de sagas</h1>

        <VerticalTimeline>
          {sagaData.map(({ id, image, description, route }) => (
            <VerticalTimelineElement
              key={id}
              contentStyle={{ background: "#f0f0f0", color: "#000" }}
              contentArrowStyle={{ borderRight: "7px solid #bbb" }}
              iconStyle={{ background: "#000", color: "#fff" }}
              icon={<FaHatCowboy />}
            >
              <h3 className="text-xl font-semibold">{titles[id.toString()] || "Cargando..."}</h3>
              <img
                src={image}
                alt={titles[id.toString()] || ""}
                className="w-full h-48 object-cover rounded-lg my-2"
              />
              <p className="text-sm">{description}</p>
              <a
                href={route}
                className="inline-block mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                Explorar
              </a>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </Background>
  );
};
