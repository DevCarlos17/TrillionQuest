export default function AboutCard({ title, content }) {
  return (
    <div className=" w-[80%] md:w-[60%] 2xl:w-[25%] 2xl:h-[80%] border-2 rounded-3xl border-white p-4 text-white flex justify-center items-start 2xl:mx-4">
      {/* Text */}
      <div className="text-center w-[70%] sm:w-[80%] md:w-[85%] xl:w-[60%] h-[85%] flex flex-col items-center mt-8 space-y-5 lg:space-y-10">
        <h1 className="text-3xl font-bold ">{title}</h1>
        <p className="font-bold ">{content}</p>
      </div>
    </div>
  );
}
