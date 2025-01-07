

export default function Card({ title, subtitle, description }) {
    return (
        <div className="group relative rounded">
            {/* Bloque título */}
            <div className="flex flex-col items-center mt-2 text-justify transform transition-transform duration-700 group-hover:-translate-y-44">
                <h3 className="text-4xl text-yellow-500 font-bold text-center">
                    {title} <br /> {subtitle}
                </h3>
            </div>

            {/* Texto */}
            <div className="flex flex-col items-center opacity-0 transform transition-transform duration-700 group-hover:-translate-y-32 group-hover:opacity-100">
                <p className="text-white mb-20 font-bold text-center leading-extra-loose">
                    {description}
                </p>
            </div>

            {/* Circulo pequeño */}
            <div className="absolute bottom-4 w-20 h-20 rounded-full animate-glow opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mb-8 left-28"></div>
        </div>
    );
};


