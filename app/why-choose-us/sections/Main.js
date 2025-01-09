import NavLink from '@/app/components/NavLink';
import Image from 'next/image';
import BookACall from '../components/BookACall';

export default function Main() {
  return (
    <div className="w-full h-[85vh] md:h-[90vh] lg:h-[95vh] xl:h-[90vh] flex flex-col justify-center items-center relative">
      {/* Planet 1 */}

      <div className="w-full h-[35%] 2xl:[95%] z-20 overflow-hidden relative">
        <Image
          className="w-full h-[120%] object-cover z-20 absolute"
          src={'/images/planet11.svg'}
          alt="planet1"
          width={1200}
          height={1200}
        />
      </div>
      {/* Background */}
      <div className="absolute  w-full h-[100%] z-10 ">
        <Image
          className="w-full h-[80%] top-36 absolute "
          src={'/images/background.svg'}
          alt="background"
          width={800}
          height={800}
        />
      </div>

      {/* Logo */}
      <div className="absolute translate-y-32 sm:translate-y-32 md:translate-y-36 lg:translate-y-40 xl:translate-y-36 2xl:translate-y-0 w-full h-[80%] z-30">
        <Image
          className="w-full h-[100%]"
          src={'/images/LogoTrillion.svg'}
          alt="logo_trillion"
          width={800}
          height={800}
        />
      </div>

      {/* Mini planets */}
      <div className="hidden xl:block absolute w-full h-[25%] translate-y-32 sm:translate-y-32 md:translate-y-36 lg:translate-y-40 xl:translate-y-36 2xl:-translate-y-4 z-30">
        {/*First row*/}
        <div className="w-full h-[50%] flex justify-between items-center">
          {/*First planet*/}
          <div className="w-[25%] h-[100%] place-items-end ">
            <Image
              className="w-[50%] h-[90%]"
              src={'/images/MiniPlanet1.svg'}
              width={500}
              height={500}
              alt="miniplanet1"
            />
          </div>
          {/*Second planet*/}
          <div className="w-[25%] h-[100%]  ">
            <Image
              className="w-[50%] h-[90%]"
              src={'/images/MiniPlanet1.svg'}
              width={500}
              height={500}
              alt="miniplanet2"
            />
          </div>
        </div>
        {/*Second row*/}
        <div className="w-full h-[50%] flex justify-between items-center">
          {/*First planet*/}
          <div className="w-[20%] h-[100%] place-items-start ">
            <Image
              className="w-[50%] h-[70%]"
              src={'/images/MiniPlanet2.svg'}
              width={500}
              height={500}
              alt="miniplanet2"
            />
          </div>
          {/*Second planet*/}
          <div className="w-[20%] h-[100%] place-items-end ">
            <Image
              className="w-[40%] h-[70%]"
              src={'/images/MiniPlanet2.svg'}
              width={500}
              height={500}
              alt="miniplanet2"
            />
          </div>
        </div>
      </div>

      {/* Planet 2 */}
      <div className="w-full h-[70%] z-20 overflow-hidden relative">
        <Image
          className="w-full h-[260%] object-cover"
          src={'/images/planet2.svg'}
          alt="planet2"
          width={1200}
          height={1200}
        />
      </div>
      {/*Book a call */}
      <BookACall />
    </div>
  );
}
