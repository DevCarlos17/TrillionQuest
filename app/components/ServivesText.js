import Button from "./Button"

export default function ServicesText() {
    return (
        <div className="flex flex-col">
            <span className="text-6xl font-bold text-yellow-500 ml-10">
                Services
            </span>
            <span className="text-3xl font-bold text-white ml-10">
                Ready to take the next step?   Let’s make it happen
            </span>
            <div className="flex md:ml-40 mt-10 w-full mb-10">
                <Button
                    name={'Call a Book'}
                    style={
                        'text-md md:text-xl lg:text-2xl px-4 md:px-12 py-1 md:py-2 border tracking-widest'
                    } />
            </div>
            <div className="ml-10 text-white text-2xl font-bold">
                We provide tailored strategies to manage and optimize your social
                <br /> platforms, increasing your reach, attracting followers, and
                <br /> strengthening your connection with your audience. From creating
                <br /> engaging content to analyzing results, we ensure your social
                <br /> media not only grows but also delivers real impact
            </div>
        </div>
    )
}