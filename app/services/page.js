import Image from 'next/image';
import ServicesText from '../components/ServivesText';
import Services2 from '../components/Services2';
import Services3 from '../components/Services3';

export default function Services() {
  return (
    <>
      <div className="w-full h-full flex items-center">
        <div className="w-full h-[35vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[100vh]  flex justify-between items-center">
          {/* Contenedor izquierdo */}
          <div className="h-full w-[35%] flex justify-start z-10">
            <Image
              src="/images/Planet3.svg"
              alt="Planet 3"
              width={500}
              height={500}
              className="h-full object-cover"
            />
          </div>

          {/* Contenedor central */}
          <div className="h-full w-[45%] lg:w-[42%] xl:w-[40%] flex justify-center items-center relative">
            {/* Background */}
            <section className="relative w-full h-full flex justify-center items-center">
              <Image
                src="/images/background2.svg"
                alt="background"
                width={500}
                height={500}
                className="absolute w-full h-[100%] -translate-y-10"
              />
              {/* Logo Trillion */}
              <Image
                src="/images/LogoTrillion.svg"
                alt="Logo Trillion"
                width={500}
                height={500}
                className="absolute w-[100%] h-auto"
              />
            </section>
          </div>

          {/* Contenedor derecho */}
          <div className="h-full w-[35%] flex justify-end z-10">
            <Image
              src="/images/Planet4.svg"
              alt="Planet 4"
              width={500}
              height={500}
              className="h-full object-cover"
            />
          </div>
        </div>
      </div>
      <ServicesText />
      <Services2 />
      <Services3 />
    </>
  );
}
