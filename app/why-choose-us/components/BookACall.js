import NavLink from "@/app/components/NavLink";

export default function BookACall() {
    return (
      <div className="w-full h-[100vh] flex flex-col justify-center items-center relative">
        
<div className="absolute bottom-0 lg:bottom-16 xl:bottom-20 w-full flex flex-col justify-center space-y-8 h-[30%] z-50 px-4 sm:px-10 xl:px-10 ">
        <span className="uppercase space-y-2">
          <h1 className="font-bold text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl tracking-wide text-yellow-400">
            why choose us
          </h1>
          <p className="text-md sm:text-xl xl:text-xl 2xl:text-2xl font-semibold tracking-wider">
            ready to make the next step? let's make it happen
          </p>
        </span>
        <NavLink
          href="/contact"
          className=" border border-white place-content-center
                     bg-gradient-to-r from-gray-950 via-gray-900 to-gray-400 
                   text-yellow-500 font-bold rounded-full 
                transition-transform duration-300 
                hover:scale-105 hover:bg-gradient-to-r 
                hover:from-yellow-500 hover:via-yellow-300 hover:to-yellow-200 
                hover:text-gray-900 text-xl sm:text-2xl px-0 py-1 sm:py-2 xl:py-2 w-[40%] xl:h-[20%] xl:w-[15%] xl:text-2xl text-center"
        >
          Book a Call
        </NavLink>
      </div>      
        </div>
}