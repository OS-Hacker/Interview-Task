import { useState, useEffect, useCallback } from "react";
import bannerImg from "../assets/images/Banner.jpg";
import Navbar from "./Navbar";
import Button from "./ui/Button";
import subImg from "../assets/images/sub-img.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const slides = [
  {
    id: 0,
    badge: {
      image: bannerImg,
      title: "Integrated Solid Waste Management",
      description:
        "comprehensive approach to managing waste that combines various waste management",
      link: "Discover Our Services",
    },
    stat: { value: "150+", label: "Customers", image: subImg },
  },
  {
    id: 1,
    badge: {
      image: bannerImg,
      title: "Renewable Solar Solutions",
      description:
        "harnessing solar power to create clean, affordable energy for communities",
      link: "Explore Solar Projects",
    },
    stat: { value: "80+", label: "Projects", image: subImg },
  },
  {
    id: 2,
    badge: {
      image: bannerImg,
      title: "Wind Energy Infrastructure",
      description:
        "scalable wind turbine systems delivering consistent power across regions",
      link: "Learn More",
    },
    stat: { value: "40+", label: "Wind Farms", image: subImg },
  },
];

const BannerSection = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (idx) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(idx);
        setAnimating(false);
      }, 400);
    },
    [animating],
  );

  const prev = useCallback(
    () => goTo((current - 1 + slides.length) % slides.length),
    [current, goTo],
  );

  const next = useCallback(
    () => goTo((current + 1) % slides.length),
    [current, goTo],
  );

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <div className="min-h-screen font-sans">
      <section
        className="relative w-full h-[700px] overflow-hidden"
        aria-label="Hero banner"
      >
        {/* Background image with crossfade */}
        <div
          style={{ backgroundImage: `url(${slide.badge.image})` }}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            animating ? "opacity-0" : "opacity-100"
          }`}
          role="img"
          aria-label={slide.badge.title}
        />
        {/* Content layer */}
        <div className="relative z-10 flex flex-col justify-between h-full px-4 sm:px-6 md:px-10 lg:px-14 pb-10">
          {/* Navbar  */}
          <Navbar />

          {/* Headline block */}
          <div className="max-w-6xl ml-0 sm:ml-16 md:ml-32 lg:ml-50">
            <div className="heading text-4xl sm:text-4xl lg:text-6xl absolute top-30">
              <h1 key={`heading-${current}`} className="font-light">
                Unlocking Tomorrow's
                <br />
              </h1>
              <em className="My_font text-5xl sm:text-6xl md:text-7xl lg:text-8xl ml-0 sm:ml-8 md:ml-16 lg:ml-30">
                Green Energy
              </em>
            </div>

            <p className="font-medium  md:mt-20 mb-3 text-sm md:text-base text-gray-700 max-w-xs leading-relaxed slide-up-delay-1">
              Learn how sustainable energy from organic materials can create a
              greener future.
            </p>
            <Button>Let's Started</Button>
          </div>

          {/* ── Bottom overlay row ── */}
          <div
            key={`bottom-${current}`}
            className="ml-0 sm:ml-20 md:ml-32 lg:ml-40 flex justify-between items-center h-36 flex-col sm:flex-row sm:items-stretch gap-3 slide-up-delay-3"
          >
            {/* Service card */}
            <div className="flex gap-3">
              <div className="flex items-start gap-3 bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-3 sm:p-4 max-w-sm shadow-lg">
                <img
                  src={slide.stat.image}
                  alt=""
                  aria-hidden="true"
                  className="w-16 h-14 sm:w-24 sm:h-20 md:w-32 md:h-28 rounded-xl object-cover flex-shrink-0"
                />

                <div>
                  <h3 className="font-body font-semibold text-white text-xs sm:text-sm leading-snug">
                    {slide.badge.title}
                  </h3>
                  <p className="font-body w-full text-white/80 text-xs mt-1 leading-relaxed hidden sm:block">
                    {slide.badge.description.slice(0, 60)}...
                  </p>
                  <a
                    href="#"
                    className="font-body text-white text-xs font-medium mt-2 inline-block underline underline-offset-2 hover:text-green-300 transition-colors"
                  >
                    {slide.badge.link}
                  </a>
                </div>
              </div>

              <div className="w-[130px] flex justify-center flex-col items-center text-white font-semibold text-2xl gap-3 bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg">
                {slide?.stat?.value}
                <span className="text-sm text-white/80">
                  {slide?.stat?.label}
                </span>
              </div>
            </div>

            <div className="flex justify-center items-center gap-2 sm:ml-auto">
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="w-10 h-10 rounded-full bg-white border border-white/50 backdrop-blur-sm flex items-center justify-center hover:bg-white/25 active:scale-95 transition-all"
              >
                <IoIosArrowRoundBack className="w-7 h-7 font-bold" />
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-700 active:scale-95 transition-all shadow-md shadow-green-900/30"
              >
                <IoIosArrowRoundForward className="w-7 h-7 font-bold" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerSection;
