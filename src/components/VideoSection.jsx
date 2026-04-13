import React from "react";
import VedioImg from "../assets/images/VedioImg.jpg";

const VideoSection = () => {
  return (
    <section className="w-full md:max-w-6xl m-auto rounded-t-4xl bg-[#0C9458] min-h-[550px]">
      <div className="flex flex-col md:flex-row justify-around items-center md:items-center gap-4 md:gap-0 pt-8 px-6 md:px-0">
        <h4 className="text-white w-full md:w-[220px] My_font text-center md:text-left">
          At BioEnergy Solutions, we are dedicated to advancing the development.
        </h4>

        <p className="text-white w-full md:w-sm text-xs text-center md:text-left">
          We manage waste, labor, and produce biomass fuel. Our torrefied
          pellets and animal stock come from agriculture waste. We also produce
          Bio Gas Fuel (CBG) from all biomass. We see biofuel as key for India's
          energy future.
        </p>
      </div>
      <div className="flex justify-center items-end min-h-[300px] md:h-[400px] relative px-6 md:px-0 mt-6 md:mt-0">
        <p className="text-white text-3xl sm:text-5xl md:text-6xl font-light absolute top-[18px] w-full text-center md:text-center md:left-auto">
          Turning Waste{" "}
          <span className="block md:ml-66 italic font-semibold My_font">
            into Gold
          </span>
        </p>
        <img
          src={VedioImg}
          alt=""
          className="w-full md:w-xl h-[220px] sm:h-[260px] md:h-[300px] object-cover rounded-2xl"
        />
      </div>
    </section>
  );
};

export default VideoSection;
