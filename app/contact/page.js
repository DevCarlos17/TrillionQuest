import CoreValues from './sections/CoreValues';
import Main from './sections/Main';
import OurStrategy from './sections/OutStrategy';
import ServicesOverview from './sections/ServicesOverview';

export default function Contact() {
  return (
    <div className="min-h-screen w-full flex flex-col  items-center justify-between overflow-hidden">
      <Main />
      <CoreValues />
      <OurStrategy />
      <ServicesOverview />
    </div>
  );
}
