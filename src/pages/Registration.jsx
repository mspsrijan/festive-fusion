import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters ");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should contain atleast one capital letter."
      );
      return;
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      setRegisterError(
        "Your password should contain atleast one special character."
      );
      return;
    }

    setRegistrationSuccess("");
    setRegisterError("");

    createUser(email, password)
      .then(() => {
        setRegistrationSuccess("You have been registered successfully");
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };

  return (
    <div>
      <div
        className="hero min-h-[250px] px-5"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/FmMZ76w/login-registration-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(0,0,0,0.6)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="text-center text-white">
          <div className="max-w-[800px]" data-aos="fade-in">
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-snug">
              Registration
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-gray-50" data-aos="fade-up" data-aos-delay="200">
        <div className="flex flex-col items-center justify-center px-5 py-10 lg:py-16 mx-auto">
          <div className="w-full max-w-md bg-white rounded-lg shadow">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                Create and account
              </h1>
              <form
                onSubmit={handleRegistration}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="text-base bg-gray-50 border border-gray-300 rounded-md focus:border-gray-600 focus:outline-none block w-full p-2.5"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="text-base bg-gray-50 border border-gray-300 rounded-md focus:border-gray-600 focus:outline-none block w-full p-2.5"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="text-base bg-gray-50 border border-gray-300 rounded-md focus:border-gray-600 focus:outline-none block w-full p-2.5"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="photo"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your photo URL
                  </label>
                  <input
                    type="text"
                    name="photo"
                    id="photo"
                    placeholder="https://www.photo.com/your-photo.jpg"
                    className="text-base bg-gray-50 border border-gray-300 rounded-md focus:border-gray-600 focus:outline-none block w-full p-2.5"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-[#CD5C08] hover:bg-[#CD5C08]/80 font-medium rounded-md px-5 py-2.5 text-center"
                >
                  Sign Up
                </button>
                <p className="text-base text-center">
                  Already have an account? &nbsp;
                  <Link
                    to="/login"
                    className="text-[#CD5C08] hover:underline font-semibold"
                  >
                    Login here
                  </Link>
                </p>
                {registerError && (
                  <div className="alert alert-error text-base">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{registerError}</span>
                  </div>
                )}

                {registrationSuccess && (
                  <div className="alert alert-success text-base">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{registrationSuccess}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
