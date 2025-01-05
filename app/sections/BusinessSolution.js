import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../components/Button';

export default function BusinessSoulution() {
  return (
    <div className="h-screen flex w-full justify-center items-center ">
      <div className=" text-white p-4 mx-auto md:flex justify-center items-center w-[60%] lg:w-full">
        {/* Texto */}
        <div className="mt-8 md:space-y-20">
          <p className="text-3xl  md:text-6xl font-bold ml-10">
            AI-Powered Business
            <br />
            Solutions
          </p>

          <p className="text-white text-2xl lg:text-2xl xl:text-3xl mt-7 ml-10">
            Leverage the power of artificial <br />
            intelligence to optimize your <br />
            business process.
          </p>

          <Button
            name={'Learn More'}
            style={
              'mt-14 ml-10 px-6 lg:px-12 lg:text-3xl py-2 w-[60%] md:w-[70%] lg:w-[80%] xl:w-[50%] tracking-widest'
            }
          />
        </div>
        <Image
          className="hidden md:block "
          src={'/images/robot1.svg'}
          width={800}
          height={800}
          alt="robot1"
        />
      </div>
    </div>
  );
}
