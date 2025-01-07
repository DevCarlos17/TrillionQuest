export default function Sidebar() {
    return (
        <div>
            {/* Bg black */}
            <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"></div>

            {/* Blur */}
            <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"></div>
        </div>
    )
}