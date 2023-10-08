import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div
        className="hero min-h-[350px] px-5"
        style={{
          backgroundImage: "url(https://i.ibb.co/G7dhHsd/contact-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(0,0,0,0.6)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="text-center text-white">
          <div className="max-w-[800px]" data-aos="fade-in">
            <h1 className="mb-5 text-4xl lg:text-5xl font-extrabold leading-snug">
              Get in Touch
            </h1>
            <p className="mb-5">
              Reach out to us today. We'd love to hear from you and help bring
              your event dreams to life.
            </p>
          </div>
        </div>
      </div>

      <div
        className="max-w-5xl mx-auto px-5 py-10 lg:py-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="border-[#C1D8C3] rounded-lg shadow p-8">
          <FaMapMarkerAlt
            style={{
              color: "#CD5C08",
              margin: "auto",
              fontSize: "30px",
            }}
          />
          <div className="pt-4">
            <h3 className="text-xl font-semibold text-center">Address</h3>
            <p className="text-center text-base pt-2">
              1234 Celebration Avenue, <br /> Joyland 54321
              <br /> Festivia
            </p>
          </div>
        </div>

        <div className="border-[#C1D8C3] rounded-lg shadow p-8">
          <FaPhoneAlt
            style={{
              color: "#CD5C08",
              margin: "auto",
              fontSize: "30px",
            }}
          />
          <div className="pt-4">
            <h3 className="text-xl font-semibold text-center">Phone</h3>
            <p className="text-center text-base pt-2">
              44 123 456 7890 <br />
              44 123 456 7890
            </p>
          </div>
        </div>

        <div className="border-[#C1D8C3] rounded-lg shadow p-8">
          <FaEnvelope
            style={{
              color: "#CD5C08",
              margin: "auto",
              fontSize: "30px",
            }}
          />
          <div className="pt-4">
            <h3 className="text-xl font-semibold text-center">Email</h3>
            <p className="text-center text-base pt-2">
              info@your-domain.com <br /> contact@your-domain.com
            </p>
          </div>
        </div>
      </div>

      <div
        className="max-w-[200px] mx-auto px-5 pb-10 lg:pb-16"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h3 className="text-center text-2xl font-semibold pb-6">Follow Us</h3>
        <div className="grid grid-cols-3">
          <FaFacebook
            style={{
              color: "#CD5C08",
              margin: "auto",
              fontSize: "30px",
            }}
          />
          <FaInstagram
            style={{
              color: "#CD5C08",
              margin: "auto",
              fontSize: "30px",
            }}
          />
          <FaYoutube
            style={{
              color: "#CD5C08",
              margin: "auto",
              fontSize: "30px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
