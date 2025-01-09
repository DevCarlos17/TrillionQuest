import Image from 'next/image';
import LightRing from '../components/LightRing';
import LightPoint from '../components/LightPoint';
import Button from '../components/Button';
import Presentation from '../components/Presentation';
import NavLink from '../components/NavLink';

export default function Contact() {
  return (
    <div className="h-min-screen w-full flex flex-col overflow-hidden">
      <section className=" w-full h-[70vh] sm:flex flex-col justify-end overflow-hidden ">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[60vh] h-[60vh] md:w-[60vh] md:h-[60vh] ">
            <Image
              className="absolute w-[60vh] h-[60vh]"
              src="/images/background.svg"
              alt="background"
              width={600}
              height={600}
            />
          </div>

          <div className="absolute z-10 w-[60vh] h-[60vh] md:w-[60vh] ">
            <LightRing glowColor="rgba(247, 220, 153, 0.7)" />
          </div>

          <div className="absolute hidden md:inline-block z-20 w-[70vh]  h-[70vh] md:w-[70vh] bottom-16 md:bottom-10 lg:bottom-28 ">
            <Image
              className="w-[70vh] h-[70vh]"
              src="/images/RobotContact.svg"
              alt="robot"
              width={600}
              height={600}
            />
          </div>
          <div className="absolute z-30 w-[60vh] h-[65vh] md:w-[65vh] bottom-16 md:bottom-10 lg:bottom-28 ">
            <Image
              src={'/images/logoTrillion.svg'}
              width={600}
              height={600}
              alt="logoTrillion"
              className="z-10 w-[70vh] h-[70vh]"
            />
          </div>
        </div>
      </section>
      {/* Boton */}
      <div className="flex text-center items-center -ml-16 md:ml-20 md:h-[10vh] md:w-full mb-5">
        <LightPoint style={'hidden md:block z-0 md:w-[7%] h-auto -ml-[4%]'} />
      </div>
      <div className="w-full h-[100vh] flex flex-col justify-center items-center absolute z-50">
        <div className="absolute bottom-0 lg:bottom-16 xl:bottom-20 w-full flex flex-col justify-center space-y-8 h-[30%] z-50 px-4 sm:px-10 xl:px-10 ">
          <span className="uppercase space-y-2">
            <h1 className="font-bold text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl tracking-wide text-yellow-400">
              why choose us
            </h1>
            <p className="text-md sm:text-xl xl:text-xl 2xl:text-2xl font-semibold tracking-wider">
              ready to make the next step? let's make it happen
            </p>
          </span>
          <NavLink
            href="/contact"
            className=" border border-white place-content-center
                           bg-gradient-to-r from-gray-950 via-gray-900 to-gray-400 
                         text-yellow-500 font-bold rounded-full 
                      transition-transform duration-300 
                      hover:scale-105 hover:bg-gradient-to-r 
                      hover:from-yellow-500 hover:via-yellow-300 hover:to-yellow-200 
                      hover:text-gray-900 text-xl sm:text-2xl px-0 py-1 sm:py-2 xl:py-2 w-[40%] xl:h-[20%] xl:w-[15%] xl:text-2xl text-center"
          >
            Book a Call
          </NavLink>
        </div>
      </div>
    </div>
  );
}
