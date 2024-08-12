const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      author: "John Doe",
      role: "Art Enthusiast",
      image:"https://i.pinimg.com/736x/f8/66/8e/f8668e5328cfb4938903406948383cf6.jpg",

      quote:
        "Art Valley has been a revelation for me. I've discovered so many talented artists and their incredible artworks. Highly recommended!",
    },
    {
      id: 2,
      author: "Jane Smith",
      role: "Collector",
      image:"https://www.shutterstock.com/image-photo/happy-cheerful-45-year-old-600nw-2353012797.jpg",
      quote:
        "As a collector, I appreciate the diverse range of artworks available on Art Valley. It's easy to navigate and find pieces that resonate with my taste.",
    },
    {
      id: 3,
      author: "David Brown",
      role: "Artist",
      image:"https://www.shutterstock.com/image-photo/smiling-businesswoman-looking-camera-webcam-600nw-1302585136.jpg",

      quote:
        "Art Valley provided me with a platform to showcase my work to a global audience. It's been instrumental in connecting me with art enthusiasts and buyers.",
    },
    {
      id: 4,
      author: "Jane Smith",
      role: "Collector",
      image:"https://media.licdn.com/dms/image/D5612AQE1coMseiLnmg/article-cover_image-shrink_720_1280/0/1720725976765?e=2147483647&v=beta&t=3htduGlztK72luMUUQegj_OMR0q88OjAeYhlEYr4DwE",
      quote:
        "As a collector, I appreciate the diverse range of artworks available on Art Valley. It's easy to navigate and find pieces that resonate with my taste.",
    },
  ];

  return (
    <div className="bg-black py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-20">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className=" rounded-lg shadow-lg border-4 border-gray-500 shadow-gray-300"
            >
              <div className="flex justify-center my-8">
                <img
                  className="w-52 h-52 rounded-full shadow-lg shadow-black"
                  src={testimonial.image}
                  alt={testimonial.author}
                />
              </div>
              <div className="bg-gray-300 p-6">
              <p className="text-gray-800 text-sm mb-4">"{testimonial.quote}"</p>
              <p className="text-gray-900 font-bold">{testimonial.author}</p>
              <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
