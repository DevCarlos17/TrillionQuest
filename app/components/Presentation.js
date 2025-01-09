import Image from "next/image";

export default function Presentation() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-5">
            <h1 className="text-4xl md:text-6xl font-bold">Dare to innovate.</h1>
            <div className="flex flex-col md:flex-row h-[50vh] w-[60%] items-center mt-10 space-y-10 md:space-y-0 md:space-x-10">
                <div className="flex justify-center md:justify-end w-full md:w-1/3">
                    <Image
                        src="/images/LogoContact.svg"
                        className="w-[70%] h-auto md:w-[100%] md:h-auto"
                        alt="Trillion Quest Logo"
                        width={150}
                        height={150}
                    />
                </div>

                <div className="flex flex-col items-center w-full md:w-2/3 space-y-5">
                    <div className="w-full">
                        <label className="block text-white md:text-1xl font-bold mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            className="w-full p-3 bg-gradient-to-r from-gray-800 to-gray-500 rounded-full focus:outline-none text-white"
                        />
                    </div>

                    <div className="w-full">
                        <label className="block text-white md:text-1xl font-bold mb-2">
                            Your Email
                        </label>
                        <input
                            type="email"
                            className="w-full p-3 bg-gradient-to-r from-gray-800 to-gray-500 rounded-full focus:outline-none text-white"
                        />
                    </div>

                    <div className="w-full">
                        <label className="block text-white md:text-1xl font-bold mb-2">
                            Your Phone
                        </label>
                        <input
                            type="tel"
                            className="w-full p-3 bg-gradient-to-r from-gray-800 to-gray-500 rounded-full focus:outline-none text-white"
                        />
                    </div>

                    <div className="w-full">
                        <label className="block text-white md:text-1xl font-bold mb-2">
                            Questions/Comments
                        </label>
                        <textarea
                            rows="4"
                            className="w-full p-3 bg-gradient-to-r from-gray-800 to-gray-500 rounded-lg focus:outline-none text-white"
                        ></textarea>
                    </div>
                </div>
            </div>


            <div className="flex flex-col mt-48 md:flex-row items-start p-10 space-y-10 md:space-y-0 md:space-x-10">
                {/* Sección de texto */}
                <div className="flex flex-col items-start w-full md:w-1/2">
                    <h2 className="md:text-4xl font-bold mt-5">Planning your next Big Move?</h2>
                    <p className="md:text-2xl mt-3 text-gray-300">
                        Let’s bring your ideas to life with solutions that truly <br />
                        make an impact. Contact us and let’s build <br />
                        the future together.
                    </p>
                </div>

                {/* Sección de imagen */}
                <div className="flex justify-center w-full md:w-1/2">
                    <Image
                        src="/images/PresentationCard.svg"
                        className="w-[300px] h-[300px] md:w-[90vh] md:h-auto"
                        alt="Contact Us Card"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
            {/* Footer */}
            <div className="mb-10">
                <h3 className="text-2xl md:text-5xl font-bold">THE FUTURE IS JUST ONE CLICK AWAY</h3>
            </div>
        </div>
    )
}