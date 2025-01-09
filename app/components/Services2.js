export default function Services2() {
    return (
        <div className="container flex flex-col mx-auto h-[80vh] md:h-[105vh] md:-mt-8">
            <div className="flex justify-center  h-[25vh] mb-5">
                <button className="border w-[90%] sm:w-[80%] sm:h-[20vh] md:w-[50%] border-white
        bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 
        text-white font-bold rounded-full
        transition-transform duration-300 text-4xl
        hover:scale-110 hover:bg-gradient-to-r 
        hover:from-yellow-500 hover:via-yellow-300 hover:to-yellow-200 
        hover:text-gray-900 ">
                    SOCIAL MEDIA MANAGEMENT
                </button>

                <div className="flex justify-center">
                    <span className="text-white text-2xl md:ml-32 font-bold hidden sm:block">
                        We design strategic ad campaigns that capture <br />
                        the right attention and guide your customers <br />
                        through a sales funnel optimized to maximize <br />
                        conversions. From impactful ads to refining <br />
                        every stage of the funnel, we help you generate <br />
                        more revenue while connecting with your ideal <br />
                        audience
                    </span>
                </div>
            </div>
            <div className="flex justify-center md:justify-end h-[25vh]">
                <button className="border w-[90%] sm:w-[80%] sm:h-[20vh] md:py-1 md:w-[50%] border-white
        bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 
        text-white font-bold rounded-full
        transition-transform duration-300 text-4xl
        hover:scale-110 hover:bg-gradient-to-r 
        hover:from-yellow-500 hover:via-yellow-300 hover:to-yellow-200 
        hover:text-gray-900 ">
                    ADS & SALES FUNNELS
                </button>
            </div>
            <div className="flex justify-center md:flex-col mt-5 md:ml-12">
                <button className="border w-[90%] py-16 sm:w-[80%] sm:h-[20vh] md:w-[50%] mb-5 border-white
        bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 
        text-white font-bold rounded-full
        transition-transform duration-300 text-4xl
        hover:scale-110 hover:bg-gradient-to-r 
        hover:from-yellow-500 hover:via-yellow-300 hover:to-yellow-200 
        hover:text-gray-900">
                    BUSINESS DEVELOPMENT
                </button>
                <span className="justify-start ml-10 text-white text-2xl font-bold w-full hidden sm:block">
                    Our business development services focus on identifying new <br /> markets,
                    building strategic alliances, and implementing growth <br /> strategies
                    tailored to your company’s vision. From lead <br /> generation  to
                    nurturing long-term relationships, we <br /> help your business expand
                    sustainably and competitively
                </span>
            </div>
        </div>
    )
}
