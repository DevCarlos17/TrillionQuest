import Image from 'next/image';
import IntroSection from './components/IntroSection';
import BusinessSolutions from './sections/BusinessSolutions';
import ServicesOverview from './sections/ServicesOverview';
import ServicesHero from './sections/ServicesHero';

export default function Services() {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <ServicesHero />
        <IntroSection style=" sm:hidden ml-0" />
        <BusinessSolutions />
        <ServicesOverview />
      </div>
    </>
  );
}
