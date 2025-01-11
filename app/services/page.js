import BusinessSolutions from './sections/BusinessSolutions';
import ServicesOverview from './sections/ServicesOverview';
import ServicesHero from './sections/ServicesHero';
import SectionIntro_No_Absolute from './components/SectionIntro_No_Absolute';

export default function Services() {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <ServicesHero />
        <SectionIntro_No_Absolute style=" sm:hidden ml-0" />
        <BusinessSolutions />
        <ServicesOverview />
      </div>
    </>
  );
}
