import LightRing from '@/app/components/LightRing';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <>
      <section className=" w-full h-[70vh] sm:flex flex-col justify-end overflow-hidden">
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
          {/* Robot */}
          <div className="absolute md:inline-block z-20 w-[60vh] h-[60vh] sm:w-[70vh] sm:h-[70vh] md:w-[70vh] md:bottom-10 lg:bottom-28 ">
            <Image
              className="w-[70vh] h-[70vh]"
              src="/images/RobotContact.svg"
              alt="robot"
              width={600}
              height={600}
            />
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

      <div className="absolute  bottom-0 sm:-bottom-10 lg:bottom-16 xl:bottom-20 w-full flex flex-col justify-center space-y-8 h-[30%] z-30 px-4 sm:px-10 xl:px-16">
        <span className="uppercase space-y-4">
          <h1 className="font-bold text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl tracking-wide text-yellow-400">
            contact us
          </h1>
          <p className="text-xl sm:text-xl xl:text-xl 2xl:text-3xl font-bold tracking-widest">
            Tell us, what do you need?
          </p>
        </span>
      </div>
    </>
  );
}
