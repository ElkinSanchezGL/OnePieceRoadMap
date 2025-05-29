import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { sagaData } from "../../data/sagaData";
import { SagaTimelineElement } from "../../components/SagasComponents/SagaTimelineElement";
import Background from "../../components/GeneralComponents/Background";
import Sea from "../../assets/GeneralImages/Sea.png";

const LanguageListener: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return null;
};

export const SagasTimeline = () => {
  const { t } = useTranslation();

  return (
    <Background image={Sea}>
      <LanguageListener />
      <VerticalTimeline>
        {sagaData.map(({ id, image, route }) => (
          <SagaTimelineElement
            key={id}
            title={t(`timeline.sagas.${id}.title`, "Cargando...")}
            image={image}
            descriptionKey={`timeline.sagas.${id}.description`}
            route={route}
          />
        ))}
      </VerticalTimeline>
    </Background>
  );
};
