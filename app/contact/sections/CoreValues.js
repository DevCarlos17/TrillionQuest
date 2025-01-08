import Button from '@/app/components/Button';
import Card from '../components/CardCoreValues';

export default function CoreValues() {
  return (
    <div className="w-full min-h-screen md:h-[100vh] flex flex-col justify-center items-center">
      <section className="w-full h-full mt-10 md:mt-0 md:h-[60vh] place-items-center md:flex space-y-10  md:items-center md:justify-evenly md:gap-4">
        <Card
          imageSrc="/images/Innovation.svg"
          imageAlt="Innovation"
          title="INNOVATION & CLIENT FOCUS"
          imageSectionColor="bg-gray-600/30"
          textSectionColor="bg-gray-700/5"
          containerStyle="mb-2 md:mb-0"
        >
          <ul className="text-left list-disc space-y-5 mt-0 2xl:mt-16">
            <li>
              <b>Innovation:</b> We integrate artificial intelligence and
              advanced technology to offer cutting-edge marketing solutions.
            </li>
            <li>
              <b>Client Focus:</b> We customize strategies to meet each client's
              unique needs, exceeding their expectations.
            </li>
          </ul>
        </Card>

        <Card
          imageSrc="/images/Integrity.svg"
          imageAlt="Integrity"
          title="INTEGRITY & EXCELLENCE"
          imageSectionColor="bg-gray-600/30"
          textSectionColor="bg-gray-700/5"
          containerStyle="mb-2 md:mb-0"
        >
          <ul className="text-left list-disc space-y-5">
            <li>
              <b>Integrity:</b> We act with honesty and transparency, building
              relationships of trust.
            </li>
            <li>
              <b>Excellence:</b> We strive to deliver the highest quality
              services in everything we do.
            </li>
          </ul>
        </Card>

        <Card
          imageSrc="/images/Innovation.svg"
          imageAlt="Innovation"
          title="COLLABORATION & RESPONSIBILITY"
          imageSectionColor="bg-gray-600/30"
          textSectionColor="bg-gray-700/5"
          containerStyle="mb-2 md:mb-0"
        >
          <ul className="text-left list-disc space-y-5">
            <li>
              <b>Collaboration:</b> We value teamwork and strategic alliances to
              achieve superior results.
            </li>
            <li>
              <b>Social Responsibility</b>: We contribute positively to society
              and the environment.
            </li>
          </ul>
        </Card>
      </section>
      <div className="w-full h-[20vh] flex flex-col justify-evenly items-center ">
        <span className="text-base sm:text-lg 2xl:text-2xl font-bold w-[80%] text-center uppercase">
          OUR TOP PRIORITY IS TO THOROUGHLY UNDERSTAND YOUR OBJECTIVES
        </span>
        <Button
          name={'Contact Us'}
          style={
            'text-lg w-[40%] h-[30%] sm:w-[30%] md:w-[28%] lg:w-[22%] xl:w-[18%] 2xl:w-[15%]  md:h-[30%]  2xl:text-2xl md:text-xl  tracking-widest  md:block h-[7vh] 2xl:px-6 uppercase traacking-widest'
          }
        />
      </div>
    </div>
  );
}
