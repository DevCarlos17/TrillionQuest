import Image from 'next/image';
import AdsContact from './AdsContact';

export default function Presentation() {
  return (
    <div className="h-[190vh] md:h-[170vh]  w-[80vw] flex flex-col items-center justify-center bg-black text-white px-5">
      {/* Sección de texto */}
      <div className="flex flex-col h-[30vh] items-center justify-center w-full">
        <h1 className="text-4xl md:text-6xl font-bold">Dare to innovate.</h1>
        {/*LOGO TRILLION QUEST*/}
        <div className="flex flex-col md:flex-row  h-[50vh] w-[60%] items-center mt-10 space-y-10 md:space-y-0 md:space-x-10">
          <div className="flex justify-center md:justify-end w-full md:w-1/3">
            <Image
              src="/images/LogoContact.svg"
              className="w-[70%] h-auto md:w-[100%] md:h-auto"
              alt="Trillion Quest Logo"
              width={150}
              height={150}
            />
          </div>

          <div className="flex flex-col items-center w-full md:w-2/3 space-y-5">
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
        </div>
      </div>
      {/* Sección de imagen */}
      <div className="h-[40vh] md:h-[20vh] lg:h-[25vh] flex justify-center items-center w-full "></div>
      <div className="w-full h-auto text-right">
        <AdsContact />
        <span className="text-slate-300 tracking-widest text-3xl text-right">
          THE FUTURE IS JUST ONE CLICK AWAY
        </span>
      </div>
    </div>
  );
}
