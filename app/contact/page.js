import CoreValues from './sections/CoreValues';

export default function Contact() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between overflow-hidden relative">
      {/*Background
    
      <div
        className="h-[50%] w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/planet1.svg')` }}
      ></div>

      <div
        className="h-[50%] w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/planet2.svg')` }}
      ></div>
    */}
      {/*Core Values*/}
      <CoreValues />
    </div>
  );
}
