import FeatureHighlight from '../components/FeatureHighlight';
import FeatureCard from '../components/FeatureCard';
import Button from '@/app/components/Button';

export default function ServicesOverview() {
  return (
    <div className="w-[90vw] min-h-screen sm:h-[135vh] md:h-[110vh] lg:h-[100vh] xl:h-[120vh]  space-y-20 sm:space-y-28 md:space-y-20 xl:space-y-20 flex flex-col justify-center md:justify-between items-center">
      {/*First Section*/}
      <section className="flex flex-col md:flex-row w-full h-[40%] md:h-[40vh] justify-center items-center xl:-space-x-20 space-y-9 md:space-y-0 ">
        <FeatureHighlight
          number="01"
          title="Strategic Branding"
          text="Crafting unique brand identities that resonate and inspire."
        />
        <FeatureHighlight
          number="02"
          title="Innovative Campaigns"
          text="Designing dynamic marketing campaigns that captivate audiences."
        />
        <FeatureHighlight
          number="03"
          title="Empowering Your Brand"
          text="Empowering businesses to thrive in the digital landscape."
        />
      </section>
      {/*Second Section*/}
      <section className="flex flex-col md:flex-row w-full h-[40%] sm:h-[48vh] md:h-[30vh] justify-around items-center space-y-6 md:space-y-0 md:space-x-6 xl:-space-x-20">
        <FeatureCard
          title="MULTIDISCIPLINARY EXPERTISE"
          description="Our team of strategists, creatives, content specialists, SEO experts, digital advertisers, and analysts."
        />
        <FeatureCard
          title="TRANSPARENCY AND ACCESSIBILITY"
          description="We maintain open, consistent communication, keeping you informed every step of the way with progress updates."
        />
        <FeatureCard
          title="CONSTANT INNOVATION"
          description="We stay ahead of the curve on the latest trends, tools, and platforms."
        />
      </section>
      {/*Third Section*/}
      <div className="w-full h-[10%] sm:h-[8vh] md:h-[20vh] lg:h-[30vh] flex flex-col justify-center space-y-5 md:justify-evenly items-center md:space-y-2 ">
        <span className="text-4xl  lg:text-3xl xl:text-5xl font-bold">
          Tell us, what do you need?
        </span>

        <Button
          name={'Contact Us'}
          style={
            'text-lg w-[40%] h-[30%] sm:w-[30%] md:w-[30%] lg:w-[22%] xl:w-[18%] 2xl:w-[14%]  md:h-[25%]  2xl:text-2xl font-extrabold md:text-xl  tracking-widest  h-[7vh]  uppercase traacking-widest'
          }
        />
      </div>
    </div>
  );
}
