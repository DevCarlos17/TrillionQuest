import AdsToSoftware from './sections/AdsToSoftware';
import BusinessSoulution from './sections/BusinessSolution';
import Goals from './sections/Goals';
import Home from './sections/Home';
import OurTeam from './sections/OurTeam';
import Parther from './sections/Partner';
import SocialMedia from './sections/SocialMedia';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white w-full">
      <Home />
      <Parther />
      <Goals />
      <BusinessSoulution />
      <SocialMedia />
      <AdsToSoftware />
      <OurTeam />
    </div>
  );
}
