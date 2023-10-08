import { useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "./Testimonials";
import FeaturedWorks from "../components/FeaturedWorks";

const Home = () => {
  const services = useLoaderData();

  return (
    <div>
      <Hero></Hero>
      <Services services={services}></Services>
      <Testimonials></Testimonials>
      <FeaturedWorks></FeaturedWorks>
    </div>
  );
};

export default Home;
