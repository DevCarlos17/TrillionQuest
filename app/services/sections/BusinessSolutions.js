import ServicesRow from '../components/ServicesRow';

export default function BusinessSolutions() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen  w-[70vw]  space-y-20  mx-10 md:mx-10 ">
      {/*Row 1*/}
      <ServicesRow
        title={'SOCIAL MEDIA MANAGEMENT'}
        text="We provide tailored strategies to manage and optimize your social
            platforms, increasing your reach, attracting followers, and
            strengthening your connection with your audience. From creating
            engaging content to analyzing results, we ensure your social media
            not only grows but also delivers real impact."
      />
      {/*Row 2*/}
      <ServicesRow
        title={'ADS & SALES FUNNELS'}
        reverse={true}
        text="We design strategic ad campaigns that capture 
            the right attention and guide your customers 
            through a sales funnel optimized to maximize 
            conversions. From impactful ads to refining 
            every stage of the funnel, we help you generate 
            more revenue while connecting with your ideal 
            audience"
      />
      {/*Row 3*/}
      <ServicesRow
        title={' BUSINESS DEVELOPMENT'}
        text="Our business development services focus on identifying new
          markets, building strategic alliances, and implementing growth
          strategies tailored to your company’s vision. From lead 
          generation to nurturing long-term relationships, we  help your
          business expand sustainably and competitively"
      />
    </div>
  );
}
