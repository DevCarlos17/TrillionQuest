import Image from 'next/image';

export default function WhyChooseUs() {
  return (
    <div className="h-screen w-full flex flex-col overflow-hidden bg-black">
      <Image src={'/images/1.svg'} alt="planet1" width={1000} height={1000} />
    </div>
  );
}
