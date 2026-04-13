import { useFetch } from "./hooks/useFetch";
import { fetchBanners, fetchBlogs, fetchServices } from "./services/api";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import BannerSection from "./components/BannerSection";

import "./App.css";
import Navbar from "./components/Navbar";
import VideoSection from "./components/VideoSection";
import HeroSection from "./components/HeroSection";

function App() {
  const banners = useFetch(fetchBanners);
  const services = useFetch(fetchServices);
  const blogs = useFetch(fetchBlogs);

  console.log("banner", banners);
  console.log("services", services);
  console.log("blogs", blogs);

  // console.log(banners.data);
  // console.log("services data:", services.data);

  return (
    <div>
      {/* ── Banners ── */}

  

      <BannerSection />

      <AboutSection />
      <ServicesSection />
      <VideoSection />
      <HeroSection />

      {/* <section>
        <h2>Banners</h2>
        {banners.loading && <p>Loading banners...</p>}
        {banners.error && <p>{banners.error}</p>}
        {banners?.data.map((item) => (
          <img key={item.id} src={item.BANNER_IMG} alt="banner" width={300} />
        ))}
      </section> */}

      {/* ── Services ── */}
      {/* <section>
        <h2>Services</h2>
        {services.loading && <p>Loading services...</p>}
        {services.error && <p>{services.error}</p>}
        {services.data.map((item) => (
          <div key={item.id}>
            <h3>{item.TITLE ?? item.name}</h3>
            <p>{item.DESCRIPTION}</p>
            <img
              src={item.SERVICE_IMG}
              alt={item.TITLE ?? item.name}
              width={200}
            />
          </div>
        ))}
      </section> */}

      {/* ── Blogs ── */}
      {/* <section>
        <h2>Blogs</h2>
        {blogs.loading && <p>Loading blogs...</p>}
        {blogs.error && <p>{blogs.error}</p>}
        {blogs.data.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </section> */}
    </div>
  );
}

export default App;
