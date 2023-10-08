import ServiceCard from "./ServiceCard";

const Services = ({ services }) => {
  return (
    <div
      id="services"
      className="max-w-7xl mx-auto px-5 py-10 lg:py-16"
      data-aos="fade-in"
    >
      <div className="flex flex-col gap-3 mx-auto text-center max-w-[700px] mb-16">
        <p className="uppercase text-[#CD5C08] tracking-[1px]">
          Crafting Memorable Moments
        </p>
        <h1 className="text-4xl lg:text-5xl font-extrabold leading-snug">
          Our Services
        </h1>
        <p>
          We offer a range of event planning services designed to turn your
          special moments into unforgettable experiences. From weddings filled
          with love and joy to birthday parties that light up the room, our
          dedicated team is here to make your dreams come true. Explore our
          services below to discover how we can create magic together.
        </p>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
      >
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
