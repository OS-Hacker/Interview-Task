import React from "react";
import Button from "./ui/Button";
import BlogSection from "../components/BlogSection";
import FooterSection from "../components/FooterSection";


const HeroSection = () => {
  return (
    <div className="w-full md:max-w-6xl m-auto bg-white shadow-2xl rounded-t-4xl relative md:bottom-8 min-h-[500px]">
      <div className="p-6 md:p-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex justify-start flex-col items-start">
          <h3 className="font-semibold text-3xl My_font">Proven Expertise</h3>
          <span className="text-normal mb-6">A Legacy of Success</span>
          <Button>Contect Us</Button>
        </div>
        <div className="My_font w-full md:w-xl flex flex-col sm:flex-row justify-end items-start sm:items-center gap-6 md:gap-0">
          <div className="mx-0 sm:mx-2">
            <h2 className="text-3xl">25+</h2>
            <h3>A Legacy of Success</h3>
            <p className="text-xs My_font">
              We have a rich history of delivering sustainable waste management
              solutions. We have a deep understanding of the challenges faced by
              our clients
            </p>
          </div>
          <div className="mx-0 sm:mx-2">
            <h2 className="text-3xl">2+</h2>
            <h3>Biogas fuel Plants</h3>
            <p className="text-xs My_font">
              We have implemented over 2 biogas plants across the state,
              demonstrating our expertise in biogas technology and its potential
              to generate renewable energy.
            </p>
          </div>
          <div className="mx-0 sm:mx-2">
            <h2 className="text-3xl">3+</h2>
            <h3>Bio Mass Fuel Plants</h3>
            <p className="text-xs My_font">
              We have 3 Bio Mass Fuel plants where we do Maize – Kernels trading
              , Making of Torrefied Pellets Corn Cob Super Fine powder for
              Animal feed & Biodegradable Hookah Charcoal
            </p>
          </div>
        </div>
      </div>
      <BlogSection />
      <FooterSection />
    </div>
  );
};

export default HeroSection;
