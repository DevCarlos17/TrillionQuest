import Image from 'next/image';
import LightRing from '../components/LightRing';
import DigitalMarketing from '../components/DigitalMarketing';

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-start justify-center">
      <section className="relative w-full flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute  aspect-square z-0 w-[60vh] h-[60vh] md:w-[60vh] ">
          <Image
            src="/images/background.svg"
            alt="background"
            width={600}
            height={600}
          />
        </div>

        {/* Light Ring */}
        <div className="absolute  aspect-square z-10 w-[60vh] h-[60vh] md:w-[60vh] ">
          <LightRing glowColor="rgba(247, 220, 153, 0.7)" />
        </div>

        {/* Robot Image */}
        <div className="absolute  aspect-square z-20 w-[60vh] h-[60vh] md:w-[60vh] ">
          <Image src="/images/robot.svg" alt="robot" width={600} height={600} />
        </div>

        {/* Trillion Logo */}
        <div className="absolute -top-48 aspect-square z-30  w-[60vh] h-[60vh] md:w-[60vh] ">
          <Image
            src="/images/LogoTrillion.svg"
            alt="trillion"
            width={600}
            height={600}
          />
        </div>
      </section>
      <div className=" z-40 w-full ">
        <DigitalMarketing />
      </div>

      {/* Digital Marketing */}
    </div>
  );
}
