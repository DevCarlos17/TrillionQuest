import Button from "./Button"

export default function Services2() {
    return (
        <div className="container mx-auto">
            <div className="flex md:ml-40 bg-yellow-500 mt-10 w-full mb-10 p-5">
                <Button
                    name="SOCIAL MEDIA MANAGEMENT"
                    style="text-md md:text-xl lg:text-2xl px-4 md:px-40 py-1 md:py-20 border tracking-widest" />
                <span className="ml-10 text-black text-2xl font-bold w-full">
                    We design strategic ad campaigns that capture <br />
                    the right attention and guide your customers <br />
                    through a sales funnel optimized to maximize <br />
                    conversions. From impactful ads to refining <br />
                    every stage of the funnel, we help you generate <br />
                    more revenue while connecting with your ideal <br />
                    audience
                </span>
            </div>
            <div className="flex md:ml-40 bg-yellow-500 mt-10 w-full mb-10 p-5">
                <Button
                    name="ADS & SALES FUNNELS"
                    style="text-md md:text-xl lg:text-2xl px-4 md:px-40 py-1 md:py-20 border tracking-widest" />
            </div>
            <div className="flex md:ml-40 bg-yellow-500 mt-10 w-full mb-10 p-5">
                <span className="ml-10 text-black text-2xl font-bold w-full">
                    Our business development services focus on identifying new <br /> markets,
                    building strategic alliances, and implementing growth <br /> strategies
                    tailored to your company’s vision. From lead <br /> generation  to
                    nurturing long-term relationships, we help your business expand
                    sustainably and competitively
                </span>
                <div className="flex md:ml-40 bg-yellow-500 mt-10 w-full mb-10 p-5">
                    <Button
                        name="ADS & SALES FUNNELS"
                        style="text-md md:text-xl lg:text-2xl px-4 md:px-40 py-1 md:py-20 border tracking-widest" />
                </div>
            </div>
        </div>

    )
}

