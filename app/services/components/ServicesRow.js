export default function ServicesRow({ title, text, reverse = false }) {
  return (
    <div
      className={`w-full flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-x-8 ${reverse ? "md:flex-row-reverse" : ""
        }`}
    >
      <div
        className="relative h-auto w-full md:h-[100%] md:w-[50%] flex justify-center items-center text-center py-32 border-2 border-yellow-400
          text-slate-100 font-bold rounded-tr-3xl rounded-bl-3xl
          transition transform duration-700 text-4xl
          animate-glow group"
      >
        {/* Title: Se oculta cuando se hace hover */}
        <h1
          className="absolute transition-opacity duration-500 opacity-100 group-hover:opacity-0"
        >
          {title}
        </h1>

        {/* Texto: Aparece cuando se hace hover */}
        <div
          className="absolute text-lg lg:text-xl xl:text-2xl text-slate-200 font-bold 
          opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        >
          {text}
        </div>
      </div>
    </div>
  );
}
