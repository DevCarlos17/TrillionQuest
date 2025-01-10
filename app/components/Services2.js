export default function Services2() {
  return (
    <div className="container flex flex-col mx-auto h-[80vh] md:h-[105vh] md:-mt-8">
      {/*<div className="ml-20 text-white text-2xl font-bold hidden sm:block">
        We provide tailored strategies to manage and optimize your social <br />
        platforms, increasing your reach, attracting followers, and <br />
        strengthening your connection with your audience. From creating <br />
        engaging content to analyzing results, we ensure your social media{' '}
        <br />
        not only grows but also delivers real impact.
      </div> */}
      <div
        className="flex justify-center text-center py-8 h-[25vh] mb-5 border-2 w-[90%] sm:w-[80%] 
        sm:h-[20vh] md:w-[50%] border-yellow-400
        text-slate-200 font-bold rounded-full
        transition transform duration-700 text-4xl
        animate-glow"
      >
        SOCIAL MEDIA MANAGEMENT
        <div className="flex justify-center">
          <span className="text-slate-200 text-2xl md:ml-32 font-bold hidden sm:block">
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
      <div className="flex justify-center py-10 md:justify-end h-[25vh]">
        <button
          className="border-2 w-[90%] sm:w-[80%] 
        sm:h-[20vh] md:w-[50%] border-yellow-400
        text-slate-200 font-bold rounded-full
        transition transform duration-700 text-4xl
        animate-glow px-5"
        >
          ADS & SALES FUNNELS
        </button>
      </div>
      <div className="flex justify-center mt-7 md:flex-col md:ml-12">
        <button
          className="border-2 w-[90%] sm:w-[80%] 
        sm:h-[20vh] md:w-[50%] border-yellow-400
        text-slate-200 font-bold rounded-full
        transition transform duration-700 py-5 text-4xl
        animate-glow px-5 mb-5"
        >
          BUSINESS DEVELOPMENT
        </button>
        <span className="justify-start ml-10 text-slate-200 text-2xl font-bold w-full hidden sm:block">
          Our business development services focus on identifying new <br />{' '}
          markets, building strategic alliances, and implementing growth <br />{' '}
          strategies tailored to your company’s vision. From lead <br />{' '}
          generation to nurturing long-term relationships, we <br /> help your
          business expand sustainably and competitively
        </span>
      </div>
    </div>
  );
}
