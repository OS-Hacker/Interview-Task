import aboutImg1 from "../assets/images/about1.jpg";
import aboutImg2 from "../assets/images/about2.jpg";
import Button from "../components/ui/Button";

const AboutSection = () => {
  return (
    <section
      aria-label="About Us"
      className="bg-white py-12 md:py-16 px-6 overflow-hidden My_font"
      style={{ fontFamily: "sans-serif" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Label + Headline */}
        <div className="text-center md:relative md:top-6">
          <span className="text-xs My_font font-semibold tracking-widest uppercase text-[#A17339]">
            About Us
          </span>

          <h2 className="My_font mb-4 md:mb-0 text-2xl md:text-3xl lg:text-4xl font-normal text-gray-900 leading-tight max-w-3xl mx-auto mt-2">
            We see a growing business
            <br />
            where the world see's waste
          </h2>
        </div>

        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center">
          {/* Left image — tall rectangle */}
          <div className="flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-[293px] aspect-[3/4]">
              <img
                src={aboutImg1}
                alt="About Image 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center content — reordered to bottom on mobile */}
          <div className="flex flex-col items-center text-center order-last md:order-none">
            <div className="mb-8 md:mb-20">
              <p className="text-sm md:text-base My_font max-w-sm mx-auto">
                We are committed to environmental conservation and
                climate-resilient economic development.
              </p>

              <p className="text-sm text-gray-500 mt-4 max-w-sm mx-auto">
                Explores building an ecosystem for sustainable operations. Ours
                is a leading waste management and labor conglomerate, offering
                sustainable solutions with innovative technologies and a
                comprehensive approach to waste treatment.
              </p>
            </div>
            <Button>About Us</Button>
          </div>

          {/* Right image — circle */}
          <div className="flex justify-center">
            <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden shadow-xl ring-4 ring-white shrink-0">
              <img
                src={aboutImg2}
                alt="About Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
