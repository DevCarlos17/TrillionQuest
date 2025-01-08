import Button from "./Button"

export default function Services2() {
    return (
        <div className="container mx-auto bg-green-500 h-[100vh] w-a">
            <div className="flex p-5">
                <Button
                    name="SOCIAL MEDIA MANAGEMENT"
                    style="text-lg md:text-4xl tracking-wide font-semibold uppercase bg-transparent hover:bg-gray-800 hover:text-white transition-all duration-700 ease-in-out rounded-1xl py-2 shadow-lg" />

                <div className="flex justify-center">
                    <span className="text-black text-2xl md:ml-5 font-bold">
                        We design strategic ad campaigns that capture <br />
                        the right attention and guide your customers <br />
                        through a sales funnel optimized to maximize <br />
                        conversions. From impactful ads to refining <br />
                        every stage of the funnel, we help you generate <br />
                        more revenue while connecting with your ideal <br />
                        audience
                    </span>
                </div>
            </div>
            <div className="flex justify-end md:ml-40 bg-yellow-500 mb-10 p-5">
                <Button
                    name="ADS & SALES FUNNaaaELS"
                    style="text-md md:text-xl lg:text-2xl px-4 md:px-40 py-1 md:py-20 border tracking-widest" />
            </div>
            <div className="flex md:ml-40 bg-yellow-500 mt-10 mb-10 p-5">
                <span className="ml-10 text-black text-2xl font-bold w-full">
                    Our business development services focus on identifying new <br /> markets,
                    building strategic alliances, and implementing growth <br /> strategies
                    tailored to your company’s vision. From lead <br /> generation  to
                    nurturing long-term relationships, we help your business expand
                    sustainably and competitively
                </span>
                <div className="flex md:ml-40 bg-yellow-500 mt-10 mb-10 p-5">
                    <Button
                        name="ADS & SALES FUNNELS"
                        style="text-md md:text-xl lg:text-2xl px-4 md:px-40 py-1 md:py-20 border tracking-widest" />
                </div>
            </div>
        </div>
    )
}

