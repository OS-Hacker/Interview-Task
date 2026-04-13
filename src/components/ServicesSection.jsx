import React from "react";
import Accordion from "./ui/Accordion";
import ServicesImg from "../assets/images/ServicesImg.jpg";

const services = [
  {
    id: 1,
    title: "Integrated Solid Waste Management",
    description:
      "A comprehensive approach to managing waste that combines various techniques to minimize environmental impact and promote sustainability.",
    Image: ServicesImg,
    isCollapsed: false,
  },
  {
    id: 2,
    title: "Biomass Fuel & Green Energy",
    description:
      "Biomass fuel is a renewable energy source derived from organic materials such as plants, agricultural residues, and animal waste.",
    Image: ServicesImg,
    isCollapsed: true,
  },
  {
    id: 3,
    title: "Bio Gas – CBG Fuel",
    description:
      "Bio gas is a renewable fuel produced from anaerobic digestion of organic materials such as agricultural waste and sewage sludge.",
    Image: ServicesImg,
    isCollapsed: false,
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 My_font overflow-hidden">
      <span className="block text-xs sm:text-sm text-[#A17339] mb-2">
        How We Work
      </span>
      <h2 className="text-2xl sm:text-3xl font-normal max-w-sm mb-6">
        Powering a Sustainable Future for India
      </h2>

      {services.map((service) => (
        <Accordion
          key={service.id}
          title={service.title}
          description={service.description}
          idx={service.id}
          isCollapsed={service.isCollapsed}
        >
          <img
            src={service.Image}
            alt={service.title}
            className="w-full h-48 sm:h-72 md:h-96 object-cover rounded-xl mb-4"
          />
        </Accordion>
      ))}
    </section>
  );
};

export default ServicesSection;
