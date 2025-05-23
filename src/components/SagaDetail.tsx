import React, { useEffect, useState } from 'react';
import Background from './Background';
import { SagaInfoPanel } from './SagaInfoPanel';
import {
  getSagaById,
  getArcsBySagaId,
  getCharactersBySagaId,
  getEpisodesBySagaId,
  getLocationById 
} from '../services/sagasService';

type Arc = {
  id: number;
  title: string;
};

type Character = {
  id: number;
  name: string;
};

type Episode = {
  id: number;
  episode: number;
  title: string;
};

type Location = {
  id: number;
  name: string;
};

type Saga = {
  id: number;
  title: string;
  image: string;
  banner: string;
};

type Props = {
  sagaId: number;
  backgroundImage: string;
  arcIds?: number[];
  characterIds?: number[];
  episodeIds?: number[];
  locationIds?: number[];
};

export const SagaDetail = ({
  sagaId,
  backgroundImage,
  arcIds,
  characterIds,
  episodeIds,
  locationIds,
}: Props) => {
  const [saga, setSaga] = useState<Saga | null>(null);
  const [arcs, setArcs] = useState<Arc[]>([]);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          sagaData,
          arcsData,
          charactersData,
          episodesData,
        ] = await Promise.all([
          getSagaById(sagaId),
          getArcsBySagaId(sagaId),
          getCharactersBySagaId(sagaId),
          getEpisodesBySagaId(sagaId),
        ]);

        setSaga(sagaData);

        setArcs(
          arcIds ? arcsData.filter((arc: Arc) => arcIds.includes(arc.id)) : arcsData.slice(0, 5)
        );

        setCharacters(
          characterIds
            ? charactersData.filter((char: Character) => characterIds.includes(char.id))
            : charactersData.slice(0, 5)
        );

        setEpisodes(
          episodeIds
            ? episodesData.filter((ep: Episode) => episodeIds.includes(ep.id))
            : episodesData.slice(0, 5)
        );


        if (locationIds && locationIds.length > 0) {
          const locationPromises = locationIds.map(id => getLocationById(id));
          const fetchedLocations = await Promise.all(locationPromises);
          
          
          setLocations(fetchedLocations.filter(loc => loc !== null) as Location[]);
        } else {
          setLocations([]);
        }
    

      } catch (error) {
        console.error("Error cargando datos de la saga:", error);
      }
    };

    fetchData();
  }, [sagaId, arcIds, characterIds, episodeIds, locationIds]);

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

          <div className="bg-white rounded-lg p-4 shadow border">
            <h3 className="font-bold text-lg mb-2">Personajes destacados</h3>
            <ul className="list-disc list-inside">
              {characters.map(char => (
                <li key={char.id}>{char.name}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4 shadow border">
            <h3 className="font-bold text-lg mb-2">Episodios principales</h3>
            <ul className="list-disc list-inside">
              {episodes.map(ep => (
                <li key={ep.id}>Episodio {ep.episode}: {ep.title}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4 shadow border">
            <h3 className="font-bold text-lg mb-2">Locaciones destacadas</h3>
            <ul className="list-disc list-inside">
              {locations.length > 0 ? ( 
                locations.map(loc => (
                  <li key={loc.id}>{loc.name}</li>
                ))
              ) : (
                <li>No hay locaciones destacadas.</li> 
              )}
            </ul>
          </div>
        </SagaInfoPanel>
      </div>
    </Background>
  );
};