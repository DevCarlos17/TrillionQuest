import Image from "next/image";
import ServicesText from "../components/ServivesText";
import Services2 from "../components/Services2";

export default function Services() {
    return (
        <div className="relative]">
            <div className="grid md:grid-cols-3 gap-4 w-full h-[100vh] z-0">
                {/* Columna izquierda */}
                <div className="flex flex-col items-center">
                    <Image
                        className="absolute w-[80vh] mr-40 h-[80vh] z-0"
                        src="/images/Planet3.svg"
                        alt="background"
                        width={600}
                        height={600}
                    />
                </div>

                {/* Columna central */}
                <div className="relative flex justify-center items-center w-[60vh] h-[60vh]">
                    {/* Background */}
                    <Image
                        className="absolute top-0 left-0 w-full h-full"
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
                        className="relative mt-20 w-[80vh] h-[80vh] z-10"
                    />

                    {/* Mini planetas inferiores */}
                    <Image
                        src="/images/MiniPlanet1.svg"
                        width={800}
                        height={800}
                        alt="logoTrillion"
                        className="absolute w-[10vh] h-[15vh] bottom-24 z-10"
                    />
                    <Image
                        src="/images/MiniPlanet1.svg"
                        width={800}
                        height={800}
                        alt="logoTrillion"
                        className="absolute w-[7vh] h-[7vh] bottom-16 z-10"
                    />
                    <Image
                        src="/images/MiniPlanet1.svg"
                        width={800}
                        height={800}
                        alt="logoTrillion"
                        className="absolute w-[3vh] h-[3vh] bottom-7 z-10"
                    />
                </div>

                {/* Columna derecha */}
                <div className="flex flex-col items-center">
                    <Image
                        className="absolute w-[80vh] h-[80vh] z-0"
                        src="/images/Planet4.svg"
                        alt="background"
                        width={100}
                        height={100}
                    />
                </div>
            </div>

            <div className="w-full flex z-20 absolute top-96">
                <ServicesText />
            </div>
            <div className="w-full">
                <Services2 />
            </div>
        </div>
    );
}
