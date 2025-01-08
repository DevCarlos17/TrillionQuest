import Image from 'next/image';

export default function OurStrategy() {
  return (
    <div className="w-full min-h-screen md:h-[100vh] flex flex-col justify-center items-center">
      <section className="md:w-[90vw] flex flex-col items-center place-content-center md:flex-row md:justify-center md:items-center md:-space-x-10 xl:-space-x-20 2xl:-space-x-24 ">
        <Image
          src={'/images/wallpaper1.svg'}
          alt="walpaper1"
          width={500}
          height={500}
          className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[30%] xl:w-[28%] 2xl:w-[34%] md:h-[100%] sm:h-[70%] h-[30%] mb-2 md:mb-0 "
        />
        <Image
          src={'/images/wallpaper2.svg'}
          alt="walpaper2"
          width={500}
          height={500}
          className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[30%] xl:w-[28%] 2xl:w-[34%] md:h-[100%] sm:h-[70%] h-[30%] mb-2 md:mb-0 "
        />
        <Image
          src={'/images/wallpaper3.svg'}
          alt="walpaper3"
          width={500}
          height={500}
          className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[30%] xl:w-[28%] 2xl:w-[34%] md:h-[100%] sm:h-[70%] h-[30%] mb-2 md:mb-0"
        />
      </section>

      <div className="w-full h-[20vh] flex flex-col justify-evenly items-center ">
        <span className="text-base sm:text-lg 2xl:text-2xl font-bold w-[80%] text-center uppercase">
          We combine experience, innovation, and a strategic approach to drive
          your brand's growth in the digital environment, achieving results that
          surpass your expectations. This is what sets us apart.
        </span>
      </div>
    </div>
  );
}
