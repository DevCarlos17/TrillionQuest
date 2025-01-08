import Image from 'next/image';

export default function Card({
  imageSrc,
  imageAlt,
  title,
  children,
  imageSectionColor = 'bg-gray-600/30',
  textSectionColor = 'bg-white',
  containerStyle = '',
}) {
  return (
    <div
      className={`w-[70%] sm:w-[50%] md:w-[30%] lg:w-[30%] xl:w-[28%] 2xl:w-[20%] md:h-[90%] sm:h-[70%] h-[30%] rounded-t-lg flex flex-col justify-center items-center ${containerStyle}`}
    >
      {/* Imagen y título */}
      <div
        className={`w-full h-[40%] flex flex-col rounded-t-2xl justify-center gap-y-2 items-center mb-5 md:mb-0 ${imageSectionColor}`}
      >
        <Image src={imageSrc} alt={imageAlt} width={100} height={100} />
        <h1 className="font-bold text-lg md:text-base lg:text-xl text-center">
          {title}
        </h1>
      </div>

      {/* Texto dinámico */}
      <div
        className={`w-[100%] h-[60%] flex rounded-b-lg justify-center items-center ${textSectionColor}`}
      >
        <span className="text-center text-lg w-[60%] md:text-sm lg:text-base xl:text-base 2xl:text-lg">
          {children}
        </span>
      </div>
    </div>
  );
}
