import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-5 py-8 md:py-5 flex flex-col-reverse md:flex-row justify-between gap-5 items-center text-base">
        <aside className="text-center md:text-left">
          <p>Copyright ©2023 Festive Fusion. All right reserved.</p>
        </aside>
        <nav className="grid grid-cols-3 justify-self-center md:justify-self-end gap-5 items-center text-xl">
          <a className="hover:text-[#CD5C08]">
            <FaFacebook />
          </a>
          <a className="hover:text-[#CD5C08]">
            <FaInstagram />
          </a>
          <a className="hover:text-[#CD5C08]">
            <FaYoutube />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
