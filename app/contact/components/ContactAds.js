import Image from 'next/image';

export default function ContactAds() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-[90%] lg:w-[70%] h-[50vh] lg:h-[50vh] ">
      {/* Sección de texto */}

      <div className="flex flex-col  items-center w-full">
        <h2 className="text-lg md:text-4xl font-bold mt-5">
          Planning your next Big Move?
        </h2>
        <p className="text-base md:text-2xl mt-3 text-gray-300">
          Let’s bring your ideas to life with solutions that truly <br />
          make an impact. Contact us and let’s build <br />
          the future together.
        </p>
      </div>

      {/* Card Image*/}
      <div className="flex justify-center items-center w-full md:w-1/2">
        <Image
          src="/images/PresentationCard.svg"
          className=""
          alt="Contact Us Card"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
