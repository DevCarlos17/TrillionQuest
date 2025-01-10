import Image from 'next/image';
import ContactForm from '../components/ContactForm';
import ContactAds from '../components/ContactAds';
import ContactPromotion from '../components/ContactPromotion';

export default function DareToInnovate() {
  return (
    <div className="w-full h-[160vh] md:h-[130vh] mt-36 md:mt-0  flex flex-col justify-center md:justify-end items-center">
      <div className="w-full h-[100vh] flex flex-col justify-center items-center ">
        {/* Title */}
        <div className="w-full text-center  flex flex-col justify-center items-center">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl">
            Dare to innovate
          </h1>
        </div>
        <div className="flex flex-col md:flex-row h-[auto]  lg:h-[50vh] w-[70%] 2xl:w-[60%] items-center mt-10 space-y-10 md:space-y-0 md:space-x-10 ">
          {/* Logo */}
          <div className="flex justify-center md:justify-end w-full md:w-1/3">
            <Image
              src="/images/LogoContact.svg"
              className="w-[70%] h-auto md:w-[100%] md:h-auto"
              alt="Trillion Quest Logo"
              width={150}
              height={150}
            />
          </div>
          {/* Form */}
          <ContactForm />
        </div>
        {/* Contact Ads */}
        <ContactAds />
        {/* Promotion */}
        <ContactPromotion />
      </div>
    </div>
  );
}
