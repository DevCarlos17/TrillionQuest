import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../components/Button';

export default function BusinessSoulution() {
  return (
    <div className="h-screen flex w-full justify-center items-center ">
      <div className=" text-white p-4 mx-auto md:flex justify-center items-center w-full ">
        {/* Texto */}
        <div className="mt-8 md:space-y-20 w-[30vw]  flex flex-col justify-center items-center">
          <div>
            <p className="text-3xl  md:text-5xl font-bold ml-10">
              AI-Powered Business
              <br />
              Solutions
            </p>
            <p className="text-white text-2xl lg:text-2xl xl:text-3xl mt-7 ml-10">
              Leverage the power of artificial <br />
              intelligence to optimize your <br />
              business process.
            </p>
          </div>
          <div className="flex items-center justify-start w-full">
            <Button
              name={'Learn More'}
              style={
                'text-md ml-20  md:text-xl lg:text-2xl   px-4 md:px-12 py-1 md:py-2 border tracking-widest '
              }
            />
          </div>
        </div>
        <div className="mt-8 md:space-y-20 w-[40vw] h-[50vh]  flex flex-col items-end justify-center">
          <Image
            className="hidden md:block h-[70vh] w-[70vw] "
            src={'/images/robot1.svg'}
            width={700}
            height={700}
            alt="robot1"
          />
        </div>
      </div>
    </div>
  );
}
