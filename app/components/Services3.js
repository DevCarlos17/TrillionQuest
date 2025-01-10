import Image from 'next/image';
import Button from './Button';

export default function Services3() {
    return (
        <div className='container mx-auto h-[140vh] md:h-[100vh] w-auto'>
            <div className='border mb-5 md:hidden' />
            <div className='flex flex-col sm:flex-row justify-center gap-8 sm:gap-32 mb-10'>
                {/* Experience */}
                <div className="flex sm:flex-col items-center justify-center text-center ">
                    <Image
                        className="w-[20vh] h-[12vh] hover:scale-150 transition transform duration-700"
                        src="/images/Experience.svg"
                        alt="Experience"
                        width={600}
                        height={600}
                    />
                    <div>
                        <span className='flex md:flex md:text-2xl font-bold'>User Experience <br className="hidden sm:inline" /> (UX/UI) </span>
                        <span className='md:text-1xl font-bold mt-2 text-gray-400'>
                            Transform navigation into <br />
                            unforgettable <br />
                            experiences.
                        </span>
                    </div>
                </div>
                <div className='border text-white md:hidden' />
                {/* Analys */}
                <div className="flex sm:flex-col items-center justify-center text-center">
                    <Image
                        className="w-[20vh] h-[12vh] hover:scale-150 hidden md:block transition transform duration-700"
                        src="/images/Analys.svg"
                        alt="Experience"
                        width={600}
                        height={600}
                    />

                    <div>
                        <span className="flex md:text-2xl font-bold">
                            Analytics and <br className="hidden sm:inline" /> Metrics
                        </span>
                        <span className="md:text-1xl font-bold mt-2 text-gray-400">
                            Make informed decisions <br /> based on real data.
                        </span>
                    </div>

                    <Image
                        className="w-[20vh] h-[12vh] hover:scale-150 sm:block md:hidden transition transform duration-700"
                        src="/images/Analys.svg"
                        alt="Experience"
                        width={600}
                        height={600}
                    />
                </div>

                <div className='border text-gray-600 md:hidden' />

                {/* Public */}
                <div className="flex sm:flex-col items-center justify-center text-center">
                    <Image
                        className="w-[20vh] h-[12vh] hover:scale-150 transition transform duration-700"
                        src="/images/Public.svg"
                        alt="Experience"
                        width={600}
                        height={600}
                    />
                    <div>
                        <span className='flex justify-center md:text-2xl font-bold'>
                            Public Relations <br /> and Partnerships
                        </span>
                        <span className='md:text-1xl font-bold mt-2 text-gray-400'>
                            Connect your brand with <br />
                            key people and communities.
                        </span>
                    </div>
                </div>
                <div className='border text-white md:hidden' />

                {/* Strategy */}
                <div className="flex sm:flex-col items-center justify-center text-center">
                    <Image
                        className="w-[20vh] h-[12vh] hover:scale-150 hidden md:block transition transform duration-700"
                        src="/images/Strategy.svg"
                        alt="Experience"
                        width={600}
                        height={600}
                    />
                    <div>
                        <span className='flex md:text-2xl font-bold'>
                            Strategy and <br className="hidden sm:inline" /> Consulting
                        </span>
                        <span className='md:text-1xl font-bold mt-2 text-gray-400'>
                            We design personalized <br /> strategies for your <br /> brand&apos;s success.
                        </span>
                    </div>
                    <Image
                        className="w-[20vh] h-[12vh] hover:scale-150 sm:block md:hidden transition transform duration-700"
                        src="/images/Strategy.svg"
                        alt="Experience"
                        width={600}
                        height={600}
                    />
                </div>
            </div>
            <div className='border text-white md:hidden mb-5' />

            {/* Digital */}
            <div className='flex flex-col md:flex-row gap-8 sm:gap-32 justify-center'>
                <div className="flex sm:flex-col items-center justify-center text-center ">
                    <Image
                        className="w-[20vh] h-[12vh] hover:scale-150 transition transform duration-700"
                        src="/images/DigitalMarketing.svg"
                        alt="Experience"
                        width={600}
                        height={600}
                    />
                    <div>
                        <span className='flex justify-center md:text-2xl font-bold'>
                            Digital Marketing
                        </span>
                        <span className='md:text-1xl font-bold mt-2 text-gray-400'>
                            Boost your online <br /> presence with effective <br /> strategies
                        </span>
                    </div>
                </div>
                <div className='border text-white md:hidden' />

                {/* Design */}
                <div className="flex sm:flex-col items-center justify-center text-center ">
                    <Image
                        className="w-[20vh] h-[12vh] hover:scale-150 hidden md:block transition transform duration-700"
                        src="/images/Desing.svg"
                        alt="Experience"
                        width={600}
                        height={600}
                    />
                    <div>
                        <span className='flex justify-center md:text-2xl font-bold'>
                            Design and <br className="hidden sm:inline" /> Development
                        </span>
                        <span className='md:text-1xl font-bold mt-2 text-gray-400'>
                            We create unique visual and <br /> functional experiences
                        </span>
                    </div>
                    <Image
                        className="w-[20vh] h-[12vh] hover:scale-150 sm:block md:hidden transition transform duration-700"
                        src="/images/Desing.svg"
                        alt="Experience"
                        width={600}
                        height={600}
                    />
                </div>
            </div>
            <div className='border text-white md:hidden mb-6' />

            {/* Button contact */}
            <div class="flex flex-col items-center justify-center md:h-[40vh] text-white">
                <h1 class="text-3xl md:text-5xl font-bold mb-8">Tell us, what do you need?</h1>
                <button class="border-2 text-2xl md:text-4xl 
                    transition transform duration-700 border-yellow-400
                    text-yellow-500 font-bold rounded-full 
                    px-5 md:px-10 py-5 md:py-5 hover:scale-125 animate-glow">
                    Contact Us
                </button>
            </div>
        </div>

    )
}