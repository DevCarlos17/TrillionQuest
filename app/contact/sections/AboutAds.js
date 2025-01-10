import Image from "next/image";

export default function AboutAds() {
  return (
    <div className="h-[100vh] flex flex-col mt-48 md:flex-row items-start p-10 space-y-10 md:space-y-0 md:space-x-10">
   
      <div className="flex flex-col items-start w-full md:w-1/2">
        <h2 className="md:text-4xl font-bold mt-5">Planning your next Big Move?</h2>
        <p className="md:text-2xl mt-3 text-gray-300">
          Let’s bring your ideas to life with solutions that truly <br />
          make an impact. Contact us and let’s build <br />
          the future together.
        </p>
      </div>

      {/* Sección de imagen */}
      <div className="flex justify-center w-full md:w-1/2">
        <Image
          src="/images/PresentationCard.svg"
          className="w-[300px] h-[300px] md:w-[90vh] md:h-auto"
          alt="Contact Us Card"
          width={500}
          height={500}
        />
      </div>
    </div>
           
    <div className="mb-10">
      <h3 className="text-2xl md:text-5xl font-bold">
        THE FUTURE IS JUST ONE CLICK AWAY
      </h3>
    </div>
  );
}
