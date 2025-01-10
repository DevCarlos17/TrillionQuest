export default function ContactForm() {
  return (
    <div className="flex flex-col items-center h-full w-full md:w-2/3 space-y-5">
      <div className="w-full">
        <label className="block text-white md:text-1xl font-bold mb-2">
          Your Name
        </label>
        <input
          type="text"
          className="w-full p-3 bg-gradient-to-r from-gray-800 to-gray-500 rounded-full focus:outline-none text-white"
        />
      </div>

      <div className="w-full">
        <label className="block text-white md:text-1xl font-bold mb-2">
          Your Email
        </label>
        <input
          type="email"
          className="w-full p-3 bg-gradient-to-r from-gray-800 to-gray-500 rounded-full focus:outline-none text-white"
        />
      </div>

      <div className="w-full">
        <label className="block text-white md:text-1xl font-bold mb-2">
          Your Phone
        </label>
        <input
          type="tel"
          className="w-full p-3 bg-gradient-to-r from-gray-800 to-gray-500 rounded-full focus:outline-none text-white"
        />
      </div>

      <div className="w-full">
        <label className="block text-white md:text-1xl font-bold mb-2">
          Questions/Comments
        </label>
        <textarea
          rows="4"
          className="w-full p-3 bg-gradient-to-r from-gray-800 to-gray-500 rounded-lg focus:outline-none text-white"
        ></textarea>
      </div>
    </div>
  );
}
