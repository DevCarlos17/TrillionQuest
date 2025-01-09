import Image from "next/image";
import LightRing from "../components/LightRing";
import LightPoint from "../components/LightPoint";
import Button from "../components/Button";
import Presentation from "../components/Presentation";

export default function Contact() {
  return (
    <div className="h-min-screen w-full flex flex-col overflow-hidden">

      <section className="hidden w-full h-[70vh] sm:flex flex-col justify-end ">
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

          <div className="absolute z-20 w-[60vh]  h-[50vh] md:w-[60vh] ">
            <Image
              className="w-[60vh] h-[60vh]"
              src="/images/RobotContact.svg"
              alt="robot"
              width={600}
              height={600}
            />
          </div>
          <div className="absolute z-30 w-[60vh] h-[60vh] md:w-[60vh] bottom-16 md:bottom-10 lg:bottom-16 ">
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
      {/* Boton */}
      <div className="flex md:ml-20 md:h-[10vh] md:w-full mb-5">
        <Button
          name={'Contact Us'}
          style={
            'text-2xl md:px-10 md:text-3xl ml-[88px] tracking-widest hidden md:block h-[7vh] mt-[1.5vh] '
          }
        />
        <LightPoint style={' hidden md:block z-0 w-[7%] h-auto -ml-[4%]'} />
      </div>
      <div className="md:text-5xl font-bold md:ml-40 mb-20">
        Tell us, what do you need?
      </div>
      <div>
        <Presentation />
      </div>
    </div>


  );
}
