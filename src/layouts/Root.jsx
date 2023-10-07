import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "../components/Footer";

function Root() {
  useEffect(() => {
    AOS.init({
      offset: 40,
      duration: 600,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Root;
