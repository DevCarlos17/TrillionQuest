import CoreValues from './sections/CoreValues';
import OurStrategy from './sections/OutStrategy';
import ServicesOverview from './sections/ServicesOverview';

export default function Contact() {
  return (
    <div className="min-h-screen w-full flex flex-col  items-center justify-between overflow-hidden relative">
      {/*Background
    
      <div
        className="h-[50%] w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/planet1.svg')` }}
      ></div>

      <div
        className="h-[50%] w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/planet2.svg')` }}
      ></div>
    */}
      {/*Core Values*/}
      <CoreValues />
      <OurStrategy />
      <ServicesOverview />
    </div>
  );
}
