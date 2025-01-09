import Button from "./Button"

export default function ServicesText() {
    return (
        <div className="flex flex-col w-auto mt-24 h-[15vh] md:h-[0vh] md:-mt-0">
            <span className="text-4xl md:text-6xl font-bold text-yellow-500 ml-10 md:ml-20 mb-2">
                Services
            </span>
            <span className="text-2xl md:text-3xl font-bold text-white ml-10 md:ml-20">
                Ready to take the next step? Let’s make it happen
            </span>

            <div className="flex ml-10 md:ml-20 mt-10 mb-28">
                <Button
                    name="Book a Call"
                    style="text-md md:text-xl lg:text-2xl px-4 md:px-12 py-1 md:py-2 border tracking-widest"
                />
            </div>

            <div className="ml-20 text-white text-2xl font-bold hidden sm:block">
                We provide tailored strategies to manage and optimize your social <br />
                platforms, increasing your reach, attracting followers, and <br />
                strengthening your connection with your audience. From creating <br />
                engaging content to analyzing results, we ensure your social media <br />
                not only grows but also delivers real impact.
            </div>
        </div>
    )
}
