import { useLoaderData, useParams } from "react-router-dom";

const SingleService = () => {
  const services = useLoaderData();
  const { serviceId } = useParams();

  const service = services.find((service) => service.id == serviceId);
  const { id, image, name, price, short_description, long_description } =
    service;

  return (
    <div>
      <div
        className="hero min-h-[350px] px-5"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(0,0,0,0.6)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="text-center text-white">
          <div className="max-w-[800px]" data-aos="fade-in">
            <h1 className="mb-5 text-4xl lg:text-5xl font-extrabold leading-snug">
              {name}
            </h1>
            <p className="mb-5">{short_description}</p>
          </div>
        </div>
      </div>

      <div
        className="max-w-[800px] mx-auto px-5 py-10 lg:py-16"
        data-aos="fade-up"
      >
        <p>{long_description}</p>
        <button className="mx-auto mt-10 px-10 py-4 text-center bg-[#CD5C08] hover:bg-[#CD5C08]/80 text-white rounded-md">
          Purchase Now for {price}
        </button>
      </div>
    </div>
  );
};

export default SingleService;
