import Image from "next/image";

const About = () => {
  return (
    <div className="my-0 sm:py-6 min-h-screen bg-gray-900 flex flex-col justify-center items-center">
      <div className="bg-white shadow-md  p-8 md:p-12 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-pink-500 mb-6">
          About Us
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-4">
          Welcome to MyApp! We are dedicated to providing you with the best
          service possible.
        </p>
        <p className="text-gray-600 text-lg md:text-xl mb-4">
          Our mission is to make your life easier with our innovative solutions
          and exceptional customer service.
        </p>
        <p className="text-gray-600 text-lg md:text-xl mb-4">
          Our team is made up of passionate and experienced professionals who
          are always here to help you.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Our Team
          </h2>
          <div className="flex flex-wrap justify-evenly">
          {/* <div className="w-full sm:w-1/2 lg:w-1/4 px- mb-4 k shadow-lg shadow-black">
              <div className="bg-white shadow  overflow-hidden">
               
                <img src="https://media.licdn.com/dms/image/D5612AQE1coMseiLnmg/article-cover_image-shrink_720_1280/0/1720725976765?e=2147483647&v=beta&t=3htduGlztK72luMUUQegj_OMR0q88OjAeYhlEYr4DwE"  alt="" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    John Doe
                  </h3>
                  <p className="text-gray-600">CEO</p>
                </div>
              </div>
            </div> */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px- mb-4 k shadow-lg shadow-black">
              <div className="bg-white shadow  overflow-hidden">
              <img src="https://media.istockphoto.com/id/1452895487/photo/portrait-of-a-charming-business-woman-in-the-office.jpg?s=612x612&w=0&k=20&c=fZAe285E2Tq-9dtvSygGZe90NTRK8LN4cGqTrAmKmEo="  alt="" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Jane Smith
                  </h3>
                  <p className="text-gray-600">CTO</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px- mb-4 k shadow-lg shadow-black">
              <div className="bg-white shadow  overflow-hidden">
              <img src="https://media.licdn.com/dms/image/C5612AQH1xdS90Ap9jQ/article-inline_image-shrink_1500_2232/0/1643086796886?e=1726704000&v=beta&t=qj5i2jYtcYHRQVfqEu8Vadgsch1sv9D1lQvmxWRRwAE"  alt="" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Sarah Johnson
                  </h3>
                  <p className="text-gray-600">COO</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px- mb-4 k shadow-lg shadow-black">
              <div className="bg-white   overflow-hidden">
              <img src="https://media.istockphoto.com/id/1318482009/photo/young-woman-ready-for-job-business-concept.jpg?s=612x612&w=0&k=20&c=Jc1NcoUMoM78AxPTh9EApaPU2kXh2evb499JgW99b0g="  alt="" />
                <div className="p-4 bg-slate-200 overflow-hidden ">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Michael Brown
                  </h3>
                  <p className="text-gray-600">CFO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
