import Image from 'next/image';
import LightRing from '../components/LightRing';
import LightPoint from '../components/LightPoint';
import Button from '../components/Button';
import Presentation from '../components/Presentation';

export default function Contact() {
  return (
    <div className="h-min-screen w-full flex flex-col overflow-hidden">
      {/*
      <section className=" w-full h-[70vh] sm:flex flex-col justify-end ">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[60vh] mt-48 ml-20 h-[60vh] md:w-[60vh] md:h-[60vh] ">
            <Image
              className="absolute w-[50vh] h-[30vh] md:w-[60vh] md:h-[60vh]"
              src="/images/background.svg"
              alt="background"
              width={600}
              height={600}
            />
          </div>

          <div className="absolute z-10 w-[60vh] h-[60vh] md:w-[60vh] ">
            <LightRing glowColor="rgba(247, 220, 153, 0.7)" />
          </div>

          <div className="absolute z-20 top-20 w-[40vh] h-[50vh] md:w-[60vh] ">
            <Image
              className="w-[60vh] h-[60vh]"
              src="/images/RobotContact.svg"
              alt="robot"
              width={600}
              height={600}
            />
          </div>
          <div className="absolute z-30 top-60 w-[40vh] h-[40vh] md:w-[60vh] bottom-16 md:bottom-10 lg:bottom-16 ">
            <Image
              src={'/images/logoTrillion.svg'}
              width={600}
              height={600}
              alt="logoTrillion"
              className="z-10"
            />
          </div>
        </div>
      </section>
      */}
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
        <Button
          name={'Contact Us'}
          style={
            'text-2xl px-6 md:px-10 md:text-3xl ml-[88px] tracking-widest h-[5vh] md:h-[7vh] mt-[1.5vh] '
          }
        />
        <LightPoint style={'hidden md:block z-0 md:w-[7%] h-auto -ml-[4%]'} />
      </div>
      <div className="text-3xl ml-5 md:text-5xl font-bold md:ml-40 mb-20">
        Tell us, what do you need?
      </div>
      <div>
        <Presentation />
      </div>
    </div>
  );
}
