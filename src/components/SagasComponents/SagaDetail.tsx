import { useEffect, useState, useCallback } from "react";
import Background from "../Background";
import { SagaInfoPanel } from "./SagaInfoPanel";
import {
  getSagaById,
  getArcsBySagaId,
  getCharactersBySagaId,
  getEpisodesBySagaId,
  getLocationById,
} from "../../services/sagasService";
import { spanishEpisodes } from "../../data/spanishEpisodes";
import { germanEpisodes } from "../../data/germanEpisodes";
import { japaneseEpisodes } from "../../data/japaneseEpisodes";

type Arc = { id: number; title: string };
type Character = { id: number; name: string };
type Episode = { id: number; episode: number; title: string };
type Location = { id: number; name: string };
type Saga = { id: number; title: string; image: string; banner: string };

type Props = {
  sagaId: number;
  backgroundImage: string;
  arcIds?: number[];
  characterIds?: number[];
  episodeIds?: number[];
  locationIds?: number[];
};

import { useTranslation } from "react-i18next";

export const SagaDetail = ({
  sagaId,
  backgroundImage,
  arcIds,
  characterIds,
  episodeIds,
  locationIds,
}: Props) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const { t } = useTranslation();

  const [saga, setSaga] = useState<Saga | null>(null);
  const [arcs, setArcs] = useState<Arc[]>([]);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const [loadingArcs, setLoadingArcs] = useState(true);
  const [loadingCharacters, setLoadingCharacters] = useState(true);
  const [loadingEpisodes, setLoadingEpisodes] = useState(true);
  const [loadingLocations, setLoadingLocations] = useState(true);

  const supportedLangs = ["en", "fr"];

  const slugMap: Record<string, string> = {
    "Water Seven / CP9": "water-seven",
    "East Blue": "east-blue",
    Alabasta: "alabasta",
    "Celestial Island": "skypiea",
    "Water 7": "water-seven",
    "Enies Lobby": "water-seven",
    "Thriller Bark": "thriller-bark",
    "War at the top": "marineford",
    "Île des Hommes-Poissons": "isla-gyojin",
    "Dressrosa / Pirate Alliance": "dressrosa",
    "Four Emperors": "whole-cake",
    "Final Saga": "wano",
  };
  const normalizeSlug = (str: string) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "");

   const fetchData = useCallback(async (lang: string, id: number) => {
    setSaga(null); 
    setArcs([]);
    setCharacters([]);
    setEpisodes([]);
    setLocations([]);

    setLoadingData(true); 
    setLoadingArcs(true);
    setLoadingCharacters(true);
    setLoadingEpisodes(true);
    setLoadingLocations(true);

    try {
      const apiLang = supportedLangs.includes(lang) ? lang : "en";

      const [sagaData, arcsData, charactersData] = await Promise.all([
        getSagaById(id, apiLang),
        getArcsBySagaId(id, apiLang),
        getCharactersBySagaId(id, apiLang),
      ]);
      console.log("Título de la saga desde la API:", sagaData.title, "en idioma:", apiLang);
      setSaga(sagaData);

      setArcs(
        arcIds
          ? arcsData.filter((arc: Arc) => arcIds.includes(arc.id))
          : arcsData.slice(0, 5)
      );
      setLoadingArcs(false);

      setCharacters(
        characterIds
          ? charactersData.filter((char: Character) =>
              characterIds.includes(char.id)
            )
          : charactersData.slice(0, 5)
      );
      setLoadingCharacters(false);

      if (supportedLangs.includes(lang)) {
        const episodesData = await getEpisodesBySagaId(id, lang);
        const filteredEpisodes = episodeIds
          ? episodesData.filter((ep: Episode) => episodeIds.includes(ep.id))
          : episodesData.slice(0, 5);
        setEpisodes(filteredEpisodes);
      } else {
      
        const rawTitle = sagaData.title; 
        const sagaSlug = slugMap[rawTitle] || normalizeSlug(rawTitle);

        const episodeSources: Record<string, any> = {
          es: spanishEpisodes,
          de: germanEpisodes,
          jp: japaneseEpisodes,
        };

        const episodesArray = episodeSources[lang]?.[sagaSlug] || [];
        const episodeMapByNumber = episodesArray.reduce(
          (
            acc: Record<number, { id: number; episode: number; title: string }>,
            ep: { id: number; episode: number; title: string }
          ) => {
            acc[ep.episode] = ep;
            return acc;
          },
          {}
        );

        const localEpisodes = episodeIds
          ? episodeIds.map((epNum: number) => {
              const epData = episodeMapByNumber[epNum];
              return {
                id: epNum, 
                episode: epNum,
                title: epData?.title || t("sagaDetail.loading"), 
              };
            })
          : episodesArray.slice(0, 5);
        setEpisodes(localEpisodes);
      }
      setLoadingEpisodes(false);

      if (locationIds && locationIds.length > 0) {
        const locationPromises = locationIds.map((locId: number) =>
          getLocationById(locId, apiLang)
        );
        const fetchedLocations = await Promise.all(locationPromises);
        setLocations(
          fetchedLocations.filter((loc) => loc !== null) as Location[]
        );
      } else {
        setLocations([]);
      }
      setLoadingLocations(false);

    } catch (error) {
      console.error("Error cargando datos de la saga:", error);
      setLoadingArcs(false);
      setLoadingCharacters(false);
      setLoadingEpisodes(false);
      setLoadingLocations(false);
    } finally {
        setLoadingData(false); 
    }
  }, [arcIds, characterIds, episodeIds, locationIds, t]); 

  useEffect(() => {
    fetchData(currentLang, sagaId);
  }, [sagaId, currentLang, fetchData]);
  if (!saga) {
    return (
      <Background image={backgroundImage}>
        <p className="text-white text-xl">{t("sagaDetail.loading")}</p>
      </Background>
    );
  }

  return (
    <Background image={backgroundImage}>
      <div className="flex justify-center items-center min-h-screen p-10">
        <SagaInfoPanel
          title={saga.title}
          text=""
          imageUrl={saga.image}
          bottomImageUrl={saga.banner}
        >
          <div className="bg-white rounded-lg p-4 shadow border mb-4">
            <h3 className="font-bold text-lg mb-2">
              {t("sagaDetail.includedArcs")}
            </h3>
            {loadingArcs ? (
              <p>{t("sagaDetail.loadingSection")}</p>
            ) : (
              <ul className="list-disc list-inside">
                {arcs.map((arc: Arc) => (
                  <li key={arc.id}>{arc.title}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="bg-white rounded-lg p-4 shadow border mb-4">
            <h3 className="font-bold text-lg mb-2">
              {t("sagaDetail.featuredCharacters")}
            </h3>
            <ul className="list-disc list-inside">
              {characters.map((char: Character) => (
                <li key={char.id}>{char.name}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4 shadow border mb-4">
            <h3 className="font-bold text-lg mb-2">
              {t("sagaDetail.mainEpisodes")}
            </h3>
            <ul className="list-disc list-inside">
              {episodes.map((ep: Episode) => (
                <li key={ep.id}>
                  {ep.episode} {ep.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4 shadow border">
            <h3 className="font-bold text-lg mb-2">
              {t("sagaDetail.featuredLocations")}
            </h3>
            <ul className="list-disc list-inside">
              {locations.length > 0 ? (
                locations.map((loc: Location) => (
                  <li key={loc.id}>{loc.name}</li>
                ))
              ) : 
                <li>
                  
                </li>
              }
            </ul>
          </div>
        </SagaInfoPanel>
      </div>
    </Background>
  );
};
