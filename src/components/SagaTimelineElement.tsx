import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { HiArrowCircleDown } from "react-icons/hi";

type Props = {
  title: string;
  image: string;
  description: string;
  route: string;
};

export const SagaTimelineElement: React.FC<Props> = ({ title, image, description, route }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#f0f0f0", color: "#000" }}
      contentArrowStyle={{ borderRight: "7px solid #bbb" }}
      iconStyle={{ background: "#000", color: "#fff" }}
      icon={<HiArrowCircleDown />}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg my-2" />
      <p className="text-sm">{description}</p>
      <a
        href={route}
        className="inline-block mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Explorar
      </a>
    </VerticalTimelineElement>
  );
};
