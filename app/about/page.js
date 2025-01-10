import MainAbout from './sections/MainAbout';
import MissionVision from './sections/MissionVision';

export default function About() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <MainAbout />
      <MissionVision />
    </div>
  );
}
