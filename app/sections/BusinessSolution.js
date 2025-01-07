import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../components/Button';

export default function BusinessSoulution() {
  return (
    <div className="container mx-auto bg-green-500">
      <div className="text-white mx-auto md:flex w-full">
        {/* Texto */}
        <div className="mt-24 ml-32 md:mt-0 md:space-y-20 w-[45vw] flex flex-col">
          <div>
            <span className="text-2xl justify-center items-center md:text-5xl font-bold ml-10">
              <p>AI-Powered</p>
              <p>Business</p>
              <p>Solutions</p>
            </span>
            <span className="text-white text-2xl lg:text-2xl xl:text-3xl mt-7 ml-10 sm:text-justify">
              <p className="text-red-500">Leverage the power of artificial </p>
              <p>intelligence to optimize your</p>
              <p>business process.</p>
            </span>
          </div>
          <div className="flex ml-52 items-center justify-start w-full">
            <Button
              name={'Learn More'}
              style={
                'text-md md:text-xl lg:text-2xl px-4 md:px-12 py-1 md:py-2 border tracking-widest'
              }
            />
          </div>
        </div>
        <div className="mt-8 md:space-y-20 w-[70vw] h-[50vh] flex flex-col items-end justify-center">
          <Image
            className="h-[100vh] w-[60vw]"
            src={'/images/robot1.svg'}
            width={700}
            height={700}
            alt="robot1" />
        </div>
      </div>
    </div>

  );
}
