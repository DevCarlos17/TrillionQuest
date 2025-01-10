import Image from 'next/image';
import LightRing from '../components/LightRing';
import LightPoint from '../components/LightPoint';
import Presentation from './sections/Presentation';
import AdsContact from './sections/AdsContact';
import AboutHero from './sections/AboutHero';

export default function Contact() {
  return (
    <div className="h-min-screen w-full flex flex-col justify-between items-center  ">
      <AboutHero />
      <Presentation />
    </div>
  );
}
