export default function ServicesRow({ title, text, reverse = false }) {
  return (
    <div
      className={`w-full flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-x-8 ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div
        className="h-auto w-full md:h-[100%] md:w-[50%] flex justify-center text-center py-14 border-2 border-yellow-400
          text-slate-100 font-bold rounded-tr-3xl rounded-bl-3xl
          transition transform duration-700 text-4xl
          animate-glow"
      >
        <h1>{title}</h1>
      </div>

      <div className="hidden md:w-[50%] text-slate-200 font-bold sm:block">
        <span className="text-lg  lg:text-xl xl:text-2xl">{text}</span>
      </div>
    </div>
  );
}
