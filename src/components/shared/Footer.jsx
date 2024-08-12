import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="px-2   w-full bg-black text-white py-8 ">
  <footer className="bg-pink-500 text-white py-4  mb-10">
        <div className=" text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>

      <div className="max-w-7xl mx-auto flex flex-wrap justify-evenly">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <div className="flex items-center shadow-2xl mb-4">
          <Logo/>
        </div>
          <p className="text-sm">123 Street Name</p>
          <p className="text-sm">City, Country</p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-500 hover:underline">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-500 hover:underline">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-500 hover:underline">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-500 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-2">Social Media</h3>
          <ul className="flex">
  <li className="mr-4">
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebook className="w-8 h-8 text-gray-500 hover:text-pink-600 duration-300 transform hover:scale-105" />
    </a>
  </li>
  <li className="mr-4">
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter className="w-8 h-8 text-gray-500 hover:text-pink-600 duration-300 transform hover:scale-105" />
    </a>
  </li>
  <li className="mr-4">
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="w-8 h-8 text-gray-500 hover:text-pink-600 duration-300 transform hover:scale-105" />
    </a>
  </li>
  <li className="mr-4">
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="w-8 h-8 text-gray-500 hover:text-pink-600 duration-300 transform hover:scale-105" />
    </a>
  </li>
</ul>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
