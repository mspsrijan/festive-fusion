import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    setLoginSuccess("");
    setLoginError("");

    signInUser(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/login");
        setLoginSuccess("You have been loggd in successfully");
      })
      .catch((error) => {
        setLoginError(error.message);
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
              Login
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-gray-50" data-aos="fade-up" data-aos-delay="200">
        <div className="flex flex-col items-center justify-center px-5 py-10 lg:py-16 mx-auto">
          <div className="w-full max-w-md bg-white rounded-lg shadow">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
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
                <button
                  type="submit"
                  className="w-full text-white bg-[#CD5C08] hover:bg-[#CD5C08]/80 font-medium rounded-md px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
                <p className="text-base text-center">
                  Don’t have an account yet? &nbsp;
                  <Link
                    to="/registration"
                    className="text-[#CD5C08] hover:underline font-semibold"
                  >
                    Sign up
                  </Link>
                </p>
                {loginError && (
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
                    <span>{loginError}</span>
                  </div>
                )}

                {loginSuccess && (
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
                    <span>{loginSuccess}</span>
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

export default Login;
