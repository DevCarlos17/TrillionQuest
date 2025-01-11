import Image from 'next/image';
import IntroSection from '../components/IntroSection';

export default function ServicesHero() {
  return (
    <div className="w-full h-[35vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[100vh]  flex justify-between items-center relative">
      {/* Contenedor izquierdo */}
      <div className="h-full w-[35%] flex justify-start z-10">
        <Image
          src="/images/Planet3.svg"
          alt="Planet 3"
          width={500}
          height={500}
          className="h-full object-cover"
        />
      </div>

      {/* Contenedor central */}
      <div className="h-full w-[45%] lg:w-[42%] xl:w-[40%] flex justify-center items-center relative">
        {/* Background */}
        <section className="relative w-full h-full flex justify-center items-center">
          <Image
            src="/images/background2.svg"
            alt="background"
            width={500}
            height={500}
            className="absolute w-full h-[100%] -translate-y-10"
          />
          <Image
            src="/images/MiniPlanet1.svg"
            width={500}
            height={500}
            alt="logoTrillion"
            className="absolute md:w-[12vh] h-[7vh] w-[7vh] md:h-[12vh] top-12 md:top-16 lg:top-20 xl:top-48 z-10"
          />
          <Image
            src="/images/MiniPlanet1.svg"
            width={500}
            height={500}
            alt="logoTrillion"
            className="absolute h-[5vh] w-[5vh] md:w-[7vh] md:h-[7vh] top-5 md:top-8 lg:top-10 xl:top-32 z-10"
          />
          <Image
            src="/images/MiniPlanet1.svg"
            width={500}
            height={500}
            alt="logoTrillion"
            className="absolute h-[3vh] w-[3vh] md:w-[5vh] md:h-[5vh] top-1 md:top-2 lg:top-3 xl:top-20 z-10"
          />
          {/* Logo Trillion */}
          <Image
            src="/images/LogoTrillion.svg"
            alt="Logo Trillion"
            width={500}
            height={500}
            className="absolute w-[100%] h-auto"
          />
          <Image
            src="/images/MiniPlanet1.svg"
            width={500}
            height={500}
            alt="logoTrillion"
            className="absolute h-[7vh] w-[7vh] md:w-[12vh] md:h-[12vh] bottom-20 md:bottom-32 lg:bottom-40 xl:bottom-72 z-10"
          />
          <Image
            src="/images/MiniPlanet1.svg"
            width={500}
            height={500}
            alt="logoTrillion"
            className="absolute h-[5vh] w-[5vh] md:w-[7vh] md:h-[7vh] bottom-14 md:bottom-24 lg:bottom-32 xl:bottom-60 z-10"
          />
          <Image
            src="/images/MiniPlanet1.svg"
            width={500}
            height={500}
            alt="logoTrillion"
            className="absolute h-[3vh] w-[3vh] md:w-[5vh] md:h-[5vh] bottom-10 md:bottom-16 lg:bottom-24 xl:bottom-48 z-10"
          />
        </section>
      </div>

      {/* Contenedor derecho */}
      <div className="h-full w-[35%] flex justify-end z-10">
        <Image
          src="/images/Planet4.svg"
          alt="Planet 4"
          width={500}
          height={500}
          className="h-full object-cover"
        />
      </div>
      <IntroSection
        style={
          'hidden sm:block absolute bottom-0 left-0 z-40 -translate-y-5 md:-translate-y-10 xl:-translate-y-36 space-y-10 '
        }
      />
    </div>
  );
}
