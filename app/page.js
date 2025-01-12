import AdsToSoftware from './sections/AdsToSoftware';
import Home from './sections/Home';
import Goals from './sections/Goals';
import BusinessSoulution from './sections/BusinessSolution';
import OurTeam from './sections/OurTeam';
import Parther from './sections/Partner';
import SocialMedia from './sections/SocialMedia';
import SocialMediaSidebar from './components/SocialMediaSidebar';

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
