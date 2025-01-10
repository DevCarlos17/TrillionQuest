import Image from 'next/image';

export default function AboutCollageImages() {
  {
    const images = [
      { src: '/images/Collage1.svg', height: 'h-64' },
      { src: '/images/Collage2.svg', height: 'h-56' },
      { src: '/images/Collage3.svg', height: 'h-72' },
      { src: '/images/Collage4.svg', height: 'h-60' },
      { src: '/images/Collage5.svg', height: 'h-52' },
    ];

    return (
      <div className="flex flex-col h-full w-full items-center justify-center">
        <div className="flex w-[90%] flex-row items-center justify-center space-x-4 md:mb-10">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative w-48 ${image.height} overflow-hidden rounded-lg`}
            >
              <Image
                src={image.src}
                alt={`Collage ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
        <span className="md:text-5xl font-bold my-10">
          Let’s turn them into solutions
        </span>
      </div>
    );
  }
}
