import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../components/Button';

export default function BusinessSoulution() {
  return (
    <div className="text-white md:flex w-full">
      {/* Texto */}
      <div className="mt-10 ml-40 md:ml-32 md:mt-0 md:space-y-20 w-[45vw] flex flex-col">
        <div>
          <span className="text-2xl md:text-5xl font-bold ml-10">
            <p className='ml-0'>AI-Powered Business Solutions</p>
          </span>
          <span className="text-white text-2xl lg:text-2xl xl:text-3xl mt-7 ml-10 sm:text-justify">
            <p >Leverage the power of artificial </p>
            <p>intelligence to optimize your</p>
            <p>business process.</p>
          </span>
        </div>
        <div className="flex md:ml-40 mt-10 w-full">
          <Button
            name={'Learn More'}
            style={
              'text-md md:text-xl lg:text-2xl px-4 md:px-12 py-1 md:py-2 border tracking-widest'
            }
          />
        </div>
      </div>
      <div className="mt-8 md:space-y-20 w-[90vw] h-[50vh] flex flex-col items-end justify-center">
        <Image
          className="md:h-[100vh] md:w-[60vw]"
          src={'/images/robot1.svg'}
          width={700}
          height={700}
          alt="robot1" />
      </div>
    </div>
  );
}
