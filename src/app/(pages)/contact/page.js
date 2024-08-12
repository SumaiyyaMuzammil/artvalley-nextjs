const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <header className="bg-gray-500 text-white py-4 shadow-md mt-5">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl  text-center font-semibold">Contact Us</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
              >
                Send Message
              </button>
              <button
                type="reset"
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </main>

    
    </div>
  );
};

export default ContactPage;
