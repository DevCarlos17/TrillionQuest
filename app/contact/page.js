import AboutHero from './sections/AboutHero';
import DareToInnovate from './sections/DareToInnovate';

export default function Contact() {
  return (
    <div className="h-auto h-min-screen w-full flex flex-col justify-between items-center ">
      <AboutHero />
      <DareToInnovate />
    </div>
  );
}
