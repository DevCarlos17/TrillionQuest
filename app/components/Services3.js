import Image from 'next/image';

export default function Services3() {
    return (
        <div className='container mx-auto h-[65vh]'>
            <div className='flex flex-row justify-center gap-32 mb-10'>
                {/* Experience */}
                <div className="flex flex-col items-center justify-center text-center ">
                    <Image
                        className="w-[12vh] h-[12vh]"
                        src="/images/Experience.svg"
                        alt="Experience"
                        width={600}
                        height={600}
                    />
                    <span className='flex md:text-2xl font-bold'>User Experience <br /> (UX/UI) </span>
                    <span className='md:text-1xl font-bold mt-2 text-gray-400'>
                        Transform navigation into <br />
                        unforgettable <br />
                        experiences.
                    </span>
                </div>
                {/* Analys */}
                <div className="flex flex-col items-center justify-center text-center ">
                    <Image
                        className="w-[12vh] h-[12vh]"
                        src="/images/Analys.svg"
                        alt="Experience"
                        width={600}
                        height={600}
                    />
                    <span className='flex md:text-2xl font-bold'>
                        Analytics and <br /> Metrics
                    </span>
                    <span className='md:text-1xl font-bold mt-2 text-gray-400'>
                        Make informed decisions <br /> based on real data.
                    </span>
                </div>
                {/* Public */}
                <div className="flex flex-col items-center justify-center text-center ">
                    <Image
                        className="w-[12vh] h-[12vh]"
                        src="/images/Public.svg"
                        alt="Experience"
                        width={600}
                        height={600}
                    />
                    <span className='flex md:text-2xl font-bold'>
                        Public Relations <br /> and Partnerships
                    </span>
                    <span className='md:text-1xl font-bold mt-2 text-gray-400'>
                        Connect your brand with <br />
                        key people and
                        communities.
                    </span>
                </div>
                {/* Strategy */}
                <div className="flex flex-col items-center justify-center text-center ">
                    <Image
                        className="w-[12vh] h-[12vh]"
                        src="/images/Strategy.svg"
                        alt="Experience"
                        width={600}
                        height={600}
                    />
                    <span className='flex md:text-2xl font-bold'>
                        Strategy and <br /> Consulting
                    </span>
                    <span className='md:text-1xl font-bold mt-2 text-gray-400'>
                        We design personalized <br /> strategies for your <br /> brand&apos;s success.
                    </span>
                </div>
            </div>
            {/* Digital */}
            <div className='flex flex-row gap-32 justify-center'>
                <div className="flex flex-col items-center justify-center text-center ">
                    <Image
                        className="w-[12vh] h-[12vh]"
                        src="/images/DigitalMarketing.svg"
                        alt="Experience"
                        width={600}
                        height={600}
                    />
                    <span className='flex md:text-2xl font-bold'>
                        Digital Marketing
                    </span>
                    <span className='md:text-1xl font-bold mt-2 text-gray-400'>
                        Boost your online <br /> presence with effective <br /> strategies
                    </span>
                </div>
                {/* Desing */}
                <div className="flex flex-col items-center justify-center text-center ">
                    <Image
                        className="w-[12vh] h-[12vh]"
                        src="/images/Desing.svg"
                        alt="Experience"
                        width={600}
                        height={600}
                    />
                    <span className='flex md:text-2xl font-bold'>
                        Design and <br /> Development
                    </span>
                    <span className='md:text-1xl font-bold mt-2 text-gray-400'>
                        We create unique visual and <br /> functional experiences
                    </span>
                </div>
            </div>
        </div>
    )
}