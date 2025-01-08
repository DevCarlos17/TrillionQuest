export default function FeatureCard({ title, description }) {
  return (
    <div className="flex flex-col text-start tracking-wide h-full w-[60vw] md:w-[30vw] lg:w-[25vw] xl:w-[18vw] space-y-2">
      <span className="text-center md:w-[100%] lg:w-full text-2xl md:text-lg  xl:text-2xl font-bold mb-2 bg-gradient-to-r from-black from-10% to-gray-700 p-2 rounded-xl">
        {title}
      </span>
      <span className="text-xl md:text-lg xl:text-2xl text-center">
        {description}
      </span>
    </div>
  );
}
