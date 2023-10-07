import { useLoaderData, useParams } from "react-router-dom";

const SingleService = () => {
  const services = useLoaderData();
  const { serviceId } = useParams();

  const service = services.find((service) => service.id == serviceId);
  const { id, image, name, price, short_description, long_description } =
    service;

  return (
    <div>
      {id}
      {image}
      {name}
      {price}
      {short_description}
      {long_description}
    </div>
  );
};

export default SingleService;
