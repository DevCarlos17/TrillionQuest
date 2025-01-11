import AdsToSoftware from './sections/AdsToSoftware';
import Home from './sections/Home';
import Goals from './sections/Goals';
import BusinessSoulution from './sections/BusinessSolution';
import OurTeam from './sections/OurTeam';
import Parther from './sections/Partner';
import SocialMedia from './sections/SocialMedia';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Home />
      <Goals />
      <Parther />
      <BusinessSoulution />
      <SocialMedia />
      <AdsToSoftware />
      <OurTeam />
    </div>
  );
}
