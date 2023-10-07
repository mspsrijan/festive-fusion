import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

import { FaBeer } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto p-5 flex flex-col-reverse md:flex-row justify-between gap-5 items-center text-base">
        <aside className="text-center md:text-left">
          <p>Copyright ©2023 Festive Fusion. All right reserved.</p>
        </aside>
        <nav className="grid grid-cols-3 justify-self-center md:justify-self-end gap-5 items-center text-xl">
          <a>
            <FaFacebook />
          </a>
          <a>
            <FaInstagram />
          </a>
          <a>
            <FaYoutube />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
