import DigitalMarketing from '@/app/components/DigitalMarketing';
import LightRing from '@/app/components/LightRing';
import NavLink from '@/app/components/NavLink';
import Image from 'next/image';
import SocialMediaBar from '../components/SocialMediaBar';

export default function MainAbout() {
  return (
    <div className="h-screen w-full flex flex-col overflow-hidden ">
      <section className=" w-full h-[70vh] sm:flex flex-col justify-end overflow-hidden ">
        <div className="flex flex-col justify-center items-center shadow-custom">
          {/* Background */}
          <div className="w-[60vh] h-[60vh] sm:w-[60vh] sm:h-[60vh] ">
            <Image
              className="absolute ml-11 mt-11 sm:ml-0 sm:mt-0 w-[50vh] h-[50vh] sm:w-[60vh]  sm:h-[60vh]"
              src="/images/background.svg"
              alt="background"
              width={600}
              height={600}
            />
          </div>
          {/* Light Ring */}
          <div className="absolute z-10 w-[45vh] h-[45vh] sm:w-[60vh] sm:h-[60vh] md:w-[60vh] ">
            <LightRing glowColor="rgba(247, 220, 153, 0.7)" />
          </div>

          {/* Logo */}
          <div className="absolute z-30 h-[80%] w-[80%] sm:w-[60vh]  sm:h-[60vh] md:w-[60vh] bottom-28 md:bottom-10 lg:bottom-32 ">
            <Image
              src={'/images/logoTrillion.svg'}
              width={600}
              height={600}
              alt="logoTrillion"
              className="z-10 h-[115%] w-[115%]"
            />
          </div>
        </div>
      </section>
      {/* Boton */}

      <div className="absolute  bottom-0 lg:bottom-16 xl:bottom-20 w-full flex justify-between items-center space-y-8 h-[30%] z-40 px-4 sm:px-10 xl:px-10 xl:pr-0 ">
        <div className="w-full h-full flex flex-col justify-center space-y-8">
          <span className="uppercase space-y-4">
            <h1 className="font-bold text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl tracking-wide text-yellow-400">
              About Us
            </h1>
            <p className="text-md sm:text-xl xl:text-xl 2xl:text-3xl font-semibold tracking-widest">
              Have Questions?
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
                          hover:text-gray-900 text-xl sm:text-2xl px-0 py-1 sm:py-2  xl:py-2 w-[60%] md:w-[40%] lg:w-[35%] xl:w-[25%] 2xl:w-[20%] xl:h-[20%]  xl:text-2xl text-center"
          >
            Book a Call
          </NavLink>
        </div>
        <div className="w-[50%]">
          <SocialMediaBar />
        </div>
      </div>
    </div>
  );
}
