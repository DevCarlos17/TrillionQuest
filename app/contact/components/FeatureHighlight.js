export default function FeatureHighlight({
  number,
  title,
  text,
  lineColor = 'bg-yellow-400',
  textColor = 'text-yellow-400',
}) {
  return (
    <div className="h-full w-[70vw] md:w-[30vw] flex justify-center items-center ">
      {/* Number */}
      <span className={`font-extrabold text-7xl  xl:text-8xl  ${textColor}`}>
        {number}
      </span>
      {/* Divider */}
      <div
        className={`h-[55%] md:h-[25%] w-[3px] ${lineColor} mx-0 md:mx-1`}
      ></div>
      {/* Text */}
      <div className="flex flex-col pl-4 w-[100%] space-y-2">
        <h1 className="text-2xl md:text-xl xl:text-3xl font-bold w-[90%] xl:w-[80%]">
          {title}
        </h1>
        <p className="text-xl md:text-lg xl:text-2xl w-[85%] xl:w-[65%]">
          {text}
        </p>
      </div>
    </div>
  );
}
