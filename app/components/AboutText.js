import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutText() {
    return (
        <div className="h-[100vh] w-auto text-white flex flex-col items-center justify-center p-6">
            <section className="">
                <h1 className="text-1xl md:text-5xl font-bold">
                    We are partners in your journey to greatness
                </h1>
            </section>
            <div className="flex flex-col items-center justify-center w-full mt-16">
                <div className="grid grid-cols-1 md:grid-cols-3 space-y-20 md:space-y-0 gap-10 cursor-pointer">

                    <div className="group relative z-10 hover:z-40 transition-all duration-300">
                        <motion
                            className="flex flex-col justify-between items-center rounded-lg p-4 animate-glow group"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.8, ease: "easeInOut" }}
                        >
                            <div
                                className="w-[350px] h-[350px] sm:w-[350px] sm:h-[350px] md:w-[340px] md:h-[521px] flex flex-col items-center rounded-2xl p-4"
                            // style={{ borderRadius: "70px" }}
                            >
                                <div className="group relative hover:z-30">
                                    <div className="flex flex-col items-center mt-32 md:mt-44 text-justify transform transition-transform duration-700 group-hover:-translate-y-28">
                                        <h3 className="text-3xl md:text-4xl text-yellow-500 md:mb-4 font-bold text-center">
                                            Mission
                                        </h3>
                                    </div>
                                    <div className="flex flex-col items-center opacity-0 transform transition-transform duration-700 group-hover:-translate-y-20 group-hover:opacity-100">
                                        <p className="text-white ml-6 mb-4 font-bold text-left">
                                            Unlock the untapped potential of businesses and guide them toward remarkable success through strategic innovation, creative solutions, and unwavering partnership. At Trillion Quest, we empower brands to think bigger, aim higher, and create lasting impact—both in their industries and in the communities around them.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion>
                    </div>

                    {/* <div className="group relative z-20 hover:z-40 transition-all duration-300">
                        <motion
                            className="flex flex-col justify-between items-center rounded-lg p-4 group"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.8, ease: "easeInOut" }}
                        >
                            <div
                                className="w-[350px] h-[350px] sm:w-[350px] sm:h-[350px] md:w-[340px] md:h-[521px] flex flex-col items-center rounded-lg p-4"
                                style={{ borderRadius: "70px" }}
                            >
                                <p className="text-gl font-bold absolute opacity-0 transition-opacity duration-700 -mt-20 group-hover:opacity-100">
                                    Inspired by the world&apos;s most successful trillion-dollar companies, we believe that every business has the ability to scale, innovate, and transform. We work hand-in-hand with our clients to set ambitious goals, surpass them, and continue climbing toward new horizons.
                                </p>
                                <div className="flex flex-col -mt-32 items-center text-justify transform transition-transform duration-700">
                                    <div className="w-[20vh] h-[20vh] md:w-[50vh] md:h-[50vh]">
                                        <Image
                                            className="absolute w-[70vh] h-[70vh]"
                                            src="/images/Planet8.svg"
                                            alt="background"
                                            width={600}
                                            height={600}
                                        />
                                    </div>
                                </div>
                                <div className="flex mt-80 items-center absolute opacity-0 transform transition-all duration-700 group-hover:opacity-100 group-hover:-translate-y-1">
                                    <p className="text-white font-bold text-center leading-extra-loose">
                                        Beyond limits, beyond boundaries
                                    </p>
                                </div>
                                <div className="p-5 rounded-lg">
                                    <button className="border border-white bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 text-yellow-500 font-bold rounded-full transition-transform duration-300 hover:scale-110 hover:text-gray-900 text-2xl mt-20 px-10 py-5">
                                        Reach Out Now
                                    </button>
                                </div>
                            </div>
                        </motion>
                    </div>

                    <div className="group relative z-10 hover:z-40 transition-all duration-300">
                        <motion
                            className="relative flex flex-col justify-between items-center rounded-lg p-4 animate-glow group"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.8, ease: "easeInOut" }}
                        >
                            <div
                                className="w-[350px] h-[350px] sm:w-[350px] sm:h-[350px] md:w-[340px] md:h-[521px] flex flex-col items-center rounded-lg p-4"
                                style={{ borderRadius: "70px" }}
                            >
                                <div className="flex flex-col items-center mt-44 text-justify transition-all duration-700 group-hover:-translate-y-28">
                                    <h3 className="text-4xl text-yellow-500 font-bold text-center">
                                        Vision
                                    </h3>
                                </div>
                                <div className="flex flex-col items-center opacity-0 transform transition-transform duration-700 group-hover:-translate-y-20 group-hover:opacity-100">
                                    <p className="text-white font-bold text-center leading-extra-loose">
                                        Become the catalyst that transforms businesses into icons of innovation and success. We envision a world where every company has the tools, strategy, and inspiration to scale to new heights, breaking limits and redefining their own “impossible.” Our vision extends beyond business: we aim to build a better future, where success is measured not only by growth but by the positive impact we leave behind.
                                    </p>
                                </div>
                            </div>
                        </motion>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
