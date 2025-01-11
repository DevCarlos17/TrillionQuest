import LightRing from '@/app/components/LightRing';

import Image from 'next/image';
import SocialMediaBar from '../components/SocialMediaBar';
import SectionIntro from '@/app/components/SectionIntro';

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
      {/*
      
      */}
      <SectionIntro
        headingText="About Us"
        paragraphText="Have Questions?"
        buttonStyles="md:w-[30%] lg:w-[25%] xl:w-[20%] 2xl:w-[20%]"
      />
      <div className="absolute  bottom-0 lg:bottom-16 xl:bottom-20 w-full flex justify-between items-center space-y-8 h-[30%] z-40 px-4 sm:px-10 xl:px-10 xl:pr-0 ">
        <div className="w-full h-full flex flex-col justify-center space-y-8"></div>

        <div className="w-[50%]">
          <SocialMediaBar />
        </div>
      </div>
    </div>
  );
}
