import Image from 'next/image';

export default function CardWithImage() {
  return (
    <div class="w-[80%] h-[80%] md:w-[60%] 2xl:w-[30%] 2xl:h-[100%] rounded-3xl border-white p-4 text-white flex flex-col justify-between items-center space-y-10 lg:space-y-24 xl:space-y-20 2xl:mx-4">
      <p className="text-gl font-bold text-white text-justify w-[80%]">
        Inspired by the world's most successful trillion-dollar companies, we
        believe that every business has the ability to scale, innovate, and
        transform. We work hand-in-hand with our clients to set ambitious goals,
        surpass them, and continue climbing toward new horizons.
      </p>

      <div className="xl:w-[100%] xl:h-[100%]">
        <Image
          className=""
          src="/images/Planet8.svg"
          alt="background"
          width={600}
          height={600}
        />
      </div>

      <div className="flex flex-col text-start tracking-wide w-[60vw] md:w-[30vw] lg:w-[25vw] xl:w-[15vw]">
        <span className="text-center md:w-[100%] lg:w-full text-2xl md:text-lg  xl:text-2xl font-bold mb-2 bg-gradient-to-r from-black from-10% to-gray-300 p-2 rounded-xl">
          REACH OUT NOW
        </span>
      </div>
    </div>
  );
}
