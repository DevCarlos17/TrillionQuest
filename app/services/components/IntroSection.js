import Button from '../../components/Button';

export default function IntroSection({ style }) {
  return (
    <div
      className={`flex flex-col w-auto h-auto justify-start items-start ml-5 tracking-widest ${style}`}
    >
      <div className="flex flex-col w-full h-full ">
        <span className="text-4xl md:text-4xl lg:text-5xl font-bold text-yellow-400">
          Services
        </span>
        <span className="text-lg  md:text-xl lg:text-2xl font-bold text-white">
          Ready to take the next step? Let’s make it happen
        </span>
      </div>
      <Button
        name="Book a Call"
        style=" text-md md:text-xl lg:text-2xl px-4 md:px-12 py-1 md:py-2 border tracking-widest"
      />
    </div>
  );
}
