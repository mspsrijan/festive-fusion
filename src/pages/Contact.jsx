const Contact = () => {
  return (
    <div>
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
      </div>
    </div>
  );
};

export default Contact;
