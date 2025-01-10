
import Image from "next/image";
import ServicesText from "../components/ServivesText";
import Services2 from "../components/Services2";
import Services3 from "../components/Services3";

export default function Services() {
    return (
        <div className="relative">
            <div className=" grid md:grid-cols-3 gap-4 w-[80vh] h-[80vh] md:h-[100vh] z-0">
                {/* Columna izquierda */}
                <div className="flex flex-col items-center">
                    <Image
                        className="absolute w-[80vh] mr-40 h-[80vh] z-0 hidden sm:block"
                        src="/images/Planet3.svg"
                        alt="background"
                        width={600}
                        height={600}
                    />
                </div>

                {/* Columna central */}
                <div className="relative flex justify-center items-center md:top-0 ml-20 md:ml-0 w-[40vh] h-[40vh] md:w-[60vh] md:h-[60vh]">
                    {/* Background */}
                    <Image
                        className="absolute md:top-0"
                        src="/images/background.svg"
                        alt="background"
                        width={600}
                        height={600}
                    />

                    {/* Mini planetas */}
                    <Image
                        src="/images/MiniPlanet1.svg"
                        width={800}
                        height={800}
                        alt="logoTrillion"
                        className="absolute w-[10vh] h-[15vh] top-5 mt-7 z-10"
                    />
                    <Image
                        src="/images/MiniPlanet1.svg"
                        width={800}
                        height={800}
                        alt="logoTrillion"
                        className="absolute w-[7vh] h-[7vh] top-6 z-10"
                    />
                    <Image
                        src="/images/MiniPlanet1.svg"
                        width={800}
                        height={800}
                        alt="logoTrillion"
                        className="absolute w-[3vh] h-[3vh] -top-2 z-10"
                    />

                    {/* Logo Trillion */}
                    <Image
                        src="/images/logoTrillion.svg"
                        width={800}
                        height={800}
                        alt="logoTrillion"
                        className="relative mt-20 w-[40vh] h-[40vh] md:w-[80vh] md:h-[80vh] z-10"
                    />

                    {/* Mini planetas inferiores */}
                </div>

                {/* Columna derecha */}
                <div className="flex flex-col mr-44 items-center">
                    <Image
                        className="absolute w-[80vh] h-[80vh] z-0 hidden sm:block"
                        src="/images/Planet4.svg"
                        alt="background"
                        width={600}
                        height={600}
                    />
                </div>
            </div>

            <div className="w-full flex z-20 absolute top-96">
                <ServicesText />
            </div>
            <Services2 />
            <Services3 />
        </div>
    );
}

