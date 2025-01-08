export default function Sidebar() {
    return (
        <div>
            {/* Bg black */}
            <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"></div>

            {/* Blur */}
            <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"></div>

            {/* Side Menu */}
            <nav className=" fixed p-5 right-0 top-0 w-[300px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-700">

            </nav>
        </div>
    )
}