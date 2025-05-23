import React, { useEffect, useState } from 'react';
import Background from '../../components/Background';
import ButtonRedirect from '../../components/Button';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaHatCowboy } from 'react-icons/fa';

import GyojinIsland from "../../assets/Sagas/PrincipalImages/Saga_IslaGyojin..jpg";
import Dressrosa from "../../assets/Sagas/PrincipalImages/Saga_Dressrosa.png";
import WholeCake from "../../assets/Sagas/PrincipalImages/Saga_WholeCake.png";
import Wano from "../../assets/Sagas/PrincipalImages/Saga_Wano.png";
import GeneralOnepiece from "../../assets/GeneralImages/One_Piece.png";
import { getSagaById } from '../../services/getSagasById';

const images: { [key: string]: string } = {
  GyojinIsland,
  Dressrosa,
  WholeCake,
  Wano
};

const sagaData = [
  {
    id: 7,
    imageKey: "GyojinIsland",
    route: "/sagas/isla-gyojin",
    description:
      "Tras un salto temporal de dos años, la tripulación de Luffy vuelve por fin a reunirse en el Archipiélago Sabaody para continuar su camino hacia el Nuevo Mundo... aunque antes deberán pasar por la isla de los hombres peces.",
  },
  {
    id: 8,
    imageKey: "Dressrosa",
    route: "/sagas/dressrosa",
    description:
      "Una de las sagas más largas de toda la historia y marca la entrada de lleno de los Piratas de Sombrero de Paja en el Nuevo Mundo. Es una región muy peligrosa donde nos encontramos con algunos de los piratas más feroces del Grand Line.",
  },
  {
    id: 9,
    imageKey: "WholeCake",
    route: "/sagas/whole-cake",
    description:
      "Los Sombrero de Paja consiguen reunirse en Zou y empiezan a hacer los planes necesarios para enfrentarse a Kaidou. Sin embargo, Sanji cae en las garras de Big Mom, una peligrosa pirata y una de los Cuatro Emperadores, por lo que la tripulación tendrá que meterse de lleno en su territorio para rescatar al cocinero.",
  },
  {
    id: 10,
    imageKey: "Wano",
    route: "/sagas/wano",
    description:
      "La saga más larga de toda la serie y que arrancó en 2019 para llevarnos a la tierra de los samurais. También conocida como la Saga de los Cuatro Emperadores, con una alianza masiva para derrotar a Kaido y el equilibrio de poderes en el mundo estando más frágil que nunca.",
  },
];

export const MoreSagas = () => {
  const [titles, setTitles] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchTitlesIndividually = async () => {
      for (const { id } of sagaData) {
        try {
          const data = await getSagaById(id);
          const title = data?.tittle || data?.title;
          if (title) {
            setTitles(prev => ({ ...prev, [id.toString()]: title }));
          } else {
            console.warn(`Saga ${id} no tiene título válido`, data);
          }
        } catch (error) {
          console.error(`Error al cargar saga ${id}:`, error);
        }
      }
    };

    fetchTitlesIndividually();
  }, []);

  return (
    <Background image={GeneralOnepiece}>
      <div>
        <div className="flex justify-between items-center mb-4">
          <div></div>
          <ButtonRedirect text="Inicio" route="/" />
        </div>
        <h1 className="text-3xl font-bold mb-8 text-center drop-shadow-lg">
          Línea de tiempo de sagas
        </h1>

        <VerticalTimeline>
          {sagaData.map((saga) => (
            <VerticalTimelineElement
              key={saga.id}
              contentStyle={{ background: '#f0f0f0', color: '#000' }}
              contentArrowStyle={{ borderRight: '7px solid #bbb' }}
              iconStyle={{ background: '#000', color: '#fff' }}
              icon={<FaHatCowboy />}
            >
              <h3 className="text-xl font-semibold">{titles[saga.id.toString()] || 'Cargando...'}</h3>
              <img
                src={images[saga.imageKey]}
                alt={titles[saga.id.toString()]}
                className="w-full h-48 object-cover rounded-lg my-2"
              />
              <p className="text-sm">{saga.description}</p>
              <a
                href={saga.route}
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
