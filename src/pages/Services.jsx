import { useLoaderData } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

const Services = ({ services }) => {
  const servicesList = useLoaderData();

  return (
    <div>
      <div
        className="hero min-h-[350px] px-5"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/2d0XLgr/event-anniversary.jpg)",
          backgroundSize: "cover",
          backgroundColor: "rgba(0,0,0,0.6)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="text-center text-white">
          <div className="max-w-[800px]" data-aos="fade-in">
            <h1 className="mb-5 text-4xl lg:text-5xl font-extrabold leading-snug">
              Our Services
            </h1>
            <p className="mb-5">
              We offer a range of event planning services designed to turn your
              special moments into unforgettable experiences. From weddings
              filled with love and joy to birthday parties that light up the
              room, our dedicated team is here to make your dreams come true.
              Explore our services below to discover how we can create magic
              together.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-10 lg:py-16" data-aos="fade-in">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
        >
          {servicesList.map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
