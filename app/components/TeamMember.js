export default function TeamMember({ name, title, photo, style, children }) {
  return (
    <div
      className={`gap-y-2 md:gap-y-0 md:space-y-9 flex flex-col items-center justify-center ${style} bg-black`}
    >
      <div
        className="flex items-end justify-center w-[50vw] md:w-[18vw] h-[25vh] md:h-[35vh] rounded-3xl bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${photo})` }}
      >
        <div className="w-[100%] py-3 bg-black/60 mb-2 text-white text-center text-opacity-90 rounded-2xl">
          <h2 className="font-bold tracking-wide">{name}</h2>
          <span>{title}</span>
        </div>
      </div>
      <div className="w-full py-1 bg-black bg-opacity-80 text-white text-center text-opacity-90 border rounded-xl">
        <span className="tracking-wide text-sm md:text-md ">{children}</span>
      </div>
    </div>
  );
}
