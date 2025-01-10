import Button from '../../components/Button';

export default function IntroSection({ style }) {
  return (
    <div
      className={`flex flex-col w-auto h-auto justify-start items-start ml-5 tracking-widest ${style}`}
    >
      <div className="flex flex-col w-full h-full ">
        <h1 className="font-bold text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl tracking-widest text-yellow-400">
          Services
        </h1>
        <p className="text-lg sm:text-xl xl:text-xl 2xl:text-2xl font-semibold tracking-wider">
          Ready to take the next step? Let’s make it happen
        </p>
      </div>
      <Button
        name="Book a Call"
        style=" text-md md:text-xl lg:text-2xl px-4 md:px-12 py-1 md:py-2 border tracking-widest"
      />
    </div>
  );
}
