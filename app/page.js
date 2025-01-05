import AdsToSoftware from './sections/AdsToSoftware';
import Home from './sections/Home';
import Goals from './sections/Goals';
import BusinessSoulution from './sections/BusinessSolution';
import OurTeam from './sections/OurTeam';
import Parther from './sections/Partner';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Home />
      <OurTeam />
      <BusinessSoulution />
      <AdsToSoftware />
      <Goals />
      <Parther />
    </div>
  );
}
