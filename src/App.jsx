import { useFetch } from "./hooks/useFetch";
import { fetchBanners } from "./services/api";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import BannerSection from "./components/BannerSection";
import "./App.css";
import VideoSection from "./components/VideoSection";
import HeroSection from "./components/HeroSection";

function App() {
  const banners = useFetch(fetchBanners);
  // const services = useFetch(fetchServices);
  // const blogs = useFetch(fetchBlogs);

  // console.log("banner", banners);
  // console.log("services", services);
  // console.log("blogs", blogs);

  // console.log(banners.BANNER_IMG);
  console.log("banners data:", banners.data);

  return (
    <div>
      <BannerSection />
      <AboutSection />
      <ServicesSection />
      <VideoSection />
      <HeroSection />
    </div>
  );
}

export default App;
