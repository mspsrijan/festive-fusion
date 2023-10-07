import { useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Home = () => {
  const services = useLoaderData();

  return (
    <div>
      <Hero></Hero>
      <Services services={services}></Services>
    </div>
  );
};

export default Home;
