import React, { useEffect, useState } from 'react';
import Background from './Background';
import { SagaInfoPanel } from './SagaInfoPanel';
import {
  getSagaById,
  getArcsBySagaId,
  getCharactersBySagaId,
  getEpisodesBySagaId,
  getLocationsBySagaId
} from '../services/sagasService';

type Props = {
  sagaId: number;
  backgroundImage: string;
};

export const SagaDetail = ({ sagaId, backgroundImage }: Props) => {
  const [saga, setSaga] = useState<any>(null);
  const [arcs, setArcs] = useState<any[]>([]);
  const [characters, setCharacters] = useState<any[]>([]);
  const [episodes, setEpisodes] = useState<any[]>([]);
  const [locations, setLocations] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          sagaData,
          arcsData,
          charactersData,
          episodesData,
          locationsData
        ] = await Promise.all([
          getSagaById(sagaId),
          getArcsBySagaId(sagaId),
          getCharactersBySagaId(sagaId),
          getEpisodesBySagaId(sagaId),
          getLocationsBySagaId(sagaId),
        ]);


        setSaga(sagaData);
        setArcs(arcsData.slice(0, 5));
        setCharacters(charactersData.slice(0, 5));
        setEpisodes(episodesData.slice(0, 5));

        const safeLocations = Array.isArray(locationsData?.locations)
          ? locationsData.locations.slice(0, 5)
          : Array.isArray(locationsData)
          ? locationsData.slice(0, 5)
          : [];
          
        setLocations(safeLocations);
      } catch (error) {
        console.error("Error cargando datos de la saga:", error);
      }
    };

    fetchData();
  }, [sagaId]);

  if (!saga) {
    return (
      <Background image={backgroundImage}>
        <p className="text-white text-xl">Cargando saga...</p>
      </Background>
    );
  }

  return (
    <Background image={backgroundImage}>
      <div className="flex justify-center items-center min-h-screen p-10">
        <SagaInfoPanel
          title={saga.title}
          text="Información destacada"
          imageUrl={saga.image}
          bottomImageUrl={saga.banner}
        >
          <div className="bg-white rounded-lg p-4 shadow border">
            <h3 className="font-bold text-lg mb-2">Arcos incluidos</h3>
            <ul className="list-disc list-inside">
              {arcs.map(arc => (
                <li key={arc.id}>{arc.title}</li>
              ))}
            </ul>
          </div>

          {/* Personajes */}
          <div className="bg-white rounded-lg p-4 shadow border">
            <h3 className="font-bold text-lg mb-2">Personajes destacados</h3>
            <ul className="list-disc list-inside">
              {characters.map(char => (
                <li key={char.id}>{char.name}</li>
              ))}
            </ul>
          </div>

          {/* Episodios */}
          <div className="bg-white rounded-lg p-4 shadow border">
            <h3 className="font-bold text-lg mb-2">Episodios principales</h3>
            <ul className="list-disc list-inside">
              {episodes.map(ep => (
                <li key={ep.id}>Episodio {ep.episode}: {ep.title}</li>
              ))}
            </ul>
          </div>

          {/* Locaciones */}
          <div className="bg-white rounded-lg p-4 shadow border">
            <h3 className="font-bold text-lg mb-2">Locaciones destacadas</h3>
            <ul className="list-disc list-inside">
              {locations.map(loc => (
                <li key={loc.id}>{loc.name}</li>
              ))}
            </ul>
          </div>
        </SagaInfoPanel>
      </div>
    </Background>
  );
};
