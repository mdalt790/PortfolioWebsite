import logo from "../assets/mdIcon2.png"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/michaeldalton790/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/mdalt790"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;