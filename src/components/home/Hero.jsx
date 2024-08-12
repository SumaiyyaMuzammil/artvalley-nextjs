import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="bg-black px-20">
      <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Welcome to <span className="text-pink-600">Art Valley</span>
          </h1>
          <p className="text-white text-lg md:text-xl mb-8">
            Discover and explore the most popular artworks from around the
            world. Immerse yourself in a diverse collection of art pieces.
          </p>
          <div>
            <Link
              href="/gallery"
              className="bg-pink-500 text-white px-6 py-3 rounded-md text-lg font-medium inline-flex items-center hover:bg-pink-400 duration-300"
            >
              Explore Now
              <FiArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center shadow-lg shadow-pink-400 border-4 border-gray-200">
          <Image
            src="https://static.thehoneycombers.com/wp-content/uploads/sites/2/2022/07/museums-in-singapore.png"
            width={1000}
            height={1000}
            alt="Art Valley Hero Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
