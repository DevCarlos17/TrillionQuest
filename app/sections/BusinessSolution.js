import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../components/Button';

export default function BusinessSoulution() {
  return (
    <div className="text-white flex flex-col h-[90vh] w-full justify-end lg:justify-center items-center ">
      {/*Container */}
      <div className="w-[70%] h-[80%] flex flex-col lg:flex-row  items-center justify-center ">
        {/* Texto */}
        <div className="w-[80vw] md:w-[75%] space-y-14 flex flex-col justify-center items-center">
          <div className="">
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold ml-10 ">
              <p className="ml-0">
                AI-Powered Business <br />
                Solutions
              </p>
            </span>
            <span className="text-white text-2xl lg:text-2xl xl:text-3xl mt-7 ml-10 sm:text-justify">
              <p>Leverage the power of artificial </p>
              <p>intelligence to optimize your</p>
              <p>business process.</p>
            </span>
          </div>

          <Button
            name={'Learn More'}
            style={
              'text-md md:text-xl w-[50%] sm:w-[40%] md:w-[60%] lg:w-[90%] xl:w-[70%] lg:text-2xl px-2 py-3 md:py-4 border tracking-widest'
            }
          />
        </div>
        {/* Robots Image*/}
        <div className="w-[130%] h-[50vh] flex flex-col items-start justify-center">
          <Image
            className="md:h-[100vh] md:w-[60vw]"
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
