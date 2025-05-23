import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { sagaData } from "../../data/sagaData"; 
import { SagaTimelineElement } from "../../components/SagaTimelineElement";
import { useSagaTitles } from "../../hooks/useSagaTitles";

export const SagasTimeline = () => {
  const ids = sagaData.map((s) => s.id);
  const titles = useSagaTitles(ids);

  return (
    <VerticalTimeline>
      {sagaData.map(({ id, image, description, route }) => (
        <SagaTimelineElement
          key={id}
          title={titles[id.toString()] || "Cargando..."}
          image={image}
          description={description}
          route={route}
        />
      ))}
    </VerticalTimeline>
  );
};
