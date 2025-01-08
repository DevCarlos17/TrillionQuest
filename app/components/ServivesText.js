import Button from "./Button"

export default function ServicesText() {
    return (
        <div className="flex flex-col w-auto">
            <span className="text-6xl font-bold text-yellow-500 ml-20 md:mt-44 mb-2">
                Services
            </span>
            <span className="text-3xl font-bold text-white ml-20">
                Ready to elevate your brand? Let’s make it happen!
            </span>

            <div className="flex md:ml-20 mt-10 mb-10">
                <Button
                    name="Book a Call"
                    style="text-md md:text-xl lg:text-2xl px-4 md:px-12 py-1 md:py-2 border tracking-widest"
                />
            </div>

            <div className="ml-20 text-white text-2xl font-bold">
                Our custom strategies are designed to help you manage and grow
                <br /> your social media platforms effectively. We focus on expanding
                <br /> your audience, driving engagement, and building a stronger
                <br /> connection with your followers. From crafting compelling content
                <br /> to delivering insightful analytics, we ensure your social media
                <br /> presence generates real, measurable results.
            </div>
        </div>
    )
}