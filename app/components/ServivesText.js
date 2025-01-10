import Button from './Button';

export default function ServicesText() {
  return (
    <div className="sm:hidden flex flex-col w-auto h-[20%] space-y-5 justify-startt items-start ml-5">
      <div className="flex flex-col w-full h-full ">
        <span className="text-4xl md:text-6xl font-bold text-yellow-400">
          Services
        </span>
        <span className="text-lg lg:text-2xl md:text-3xl font-bold text-white">
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
