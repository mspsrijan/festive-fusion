import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { id, image, name, price, short_description } = service || {};
  return (
    <div data-aos="fade-up" data-aos-delay="200">
      <div className="border-[#C1D8C3] rounded-lg shadow">
        <img
          className="rounded-t-lg w-full max-h-60 object-cover"
          src={image}
          alt={name}
        />
        <div className="p-6">
          <h3 className="mb-2 text-[22px] font-semibold leading-snug">
            {name}
          </h3>
          <p className="mb-3">{short_description}</p>

          <div className="flex justify-between items-center mt-6">
            <p className="text-[20px] font-semibold">{price}</p>
            <Link
              to={`/services/${id}`}
              href="#"
              className="inline-flex items-center px-4 py-2 text-base font-medium text-center text-white bg-[#CD5C08] rounded-md hover:bg-[#6A9C89]"
            >
              View Details
              <svg
                className="w-3.5 h-3.5 ml-2 mt-[2px]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
