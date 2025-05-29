import { useEffect } from "react";
import Background from "../../GeneralComponents/Background";
import { SagaInfoPanel } from "../SagaInfoPanel";
import { useTranslation } from "react-i18next";
import { useSagaDetail } from "./useSagaData";
import type { Props } from "./types";
import { ArcsSection, CharactersSection, EpisodesSection, LocationsSection } from "./Sections";

export const SagaDetail = ({
  sagaId,
  backgroundImage,
  arcIds,
  characterIds,
  episodeIds,
  locationIds,
}: Props) => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;

  const {
    saga,
    arcs,
    characters,
    episodes,
    locations,
    loadingData,
    loadingArcs,
    loadingCharacters,
    loadingEpisodes,
    loadingLocations,
    fetchData,
  } = useSagaDetail(
    sagaId,
    currentLang,
    arcIds,
    characterIds,
    episodeIds,
    locationIds
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (!saga || loadingData) {
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
          <ArcsSection arcs={arcs} loading={loadingArcs} />
          <CharactersSection characters={characters} />
          <EpisodesSection episodes={episodes} loading={loadingEpisodes} />
          <LocationsSection locations={locations} loading={loadingLocations} />
        </SagaInfoPanel>
      </div>
    </Background>
  );
};
