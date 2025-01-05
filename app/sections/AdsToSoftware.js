import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Button from '../components/Button';

export default function AdsToSoftware() {
  return (
    <div className="min-h-screen w-full bg-black">
      <div className="p-4 mx-auto md:flex justify-center items-center">
        {/*section 1 */}
        <section className="flex flex-col justify-evenly items-center md:items-start space-y-8 md:space-y-20">
          <div className="text-white ">
            <h1 className="text-3xl  md:text-5xl font-extrabold mb-8 text-center md:text-start">
              From Ads to <br />
              Software development
            </h1>
            <p className="text-2xl lg:text-2xl xl:text-3xl text-center md:text-start">
              We have expert for each field in the digital world <br /> we offer
              a wide spectrum of services, mejora <br /> esta informacion para
              un sitio web, potencialos a <br /> generar clientes y que sea
              profesional.
            </p>
          </div>
          {/*  Phone Ads Mobile */}
          <div className="hidden sm:block md:hidden ">
            <Image
              className="sm: h-[50vh] w-[50vh]"
              src={'/images/phoneAds.svg'}
              width={500}
              height={500}
              alt="phoneAds"
            />
          </div>

          <div className="text-white  justify-end flex items-end p-4 ">
            <ul className="text-2xl lg:text-2xl xl:text-3xl">
              <li className="mb-4 flex items-center">
                • Personalized Marketing Campaigns
                <Image
                  src={'/images/gear.png'}
                  width={100}
                  height={50}
                  alt="gear"
                  className="w-6 h-6 ml-2"
                />
              </li>
              <li className="mb-4 flex items-center">
                • Web Development
                <Image
                  src={'/images/gear.png'}
                  width={100}
                  height={50}
                  alt="gear"
                  className="w-6 h-6 ml-2"
                />
              </li>
              <li className="mb-4 flex items-center">
                • Content Creation
                <Image
                  src={'/images/gear.png'}
                  width={100}
                  height={50}
                  alt="gear"
                  className="w-6 h-6 ml-2"
                />
              </li>
              <li className="mb-4 flex items-center">
                • SEO Optimization
                <Image
                  src={'/images/gear.png'}
                  width={100}
                  height={50}
                  alt="gear"
                  className="w-6 h-6 ml-2"
                />
              </li>
              <li className="mb-4 flex items-center">
                • Email Marketing
                <Image
                  src={'/images/gear.png'}
                  width={100}
                  height={50}
                  alt="gear"
                  className="w-6 h-6 ml-2"
                />
              </li>
              <li className="mb-4 flex items-center">
                • Software and App Development
                <Image
                  src={'/images/gear.png'}
                  width={100}
                  height={50}
                  alt="gear"
                  className="w-6 h-6 ml-2"
                />
              </li>
              <li className="mb-4 flex items-center">
                • Process Automation for business
                <Image
                  src={'/images/gear.png'}
                  width={100}
                  height={50}
                  alt="gear"
                  className="w-6 h-6 ml-2"
                />
              </li>
            </ul>
          </div>
        </section>

        {/*section 2 */}
        <section className="flex flex-col justify-center items-center md:items-start">
          <div>
            <Image
              src={'/images/phoneAds.svg'}
              alt="telefono_ads"
              width={580}
              height={580}
              className="hidden md:block h-[70vh] ml-14"
            />
            {/* Botón con flecha*/}
            <div className="flex flex-col md:ml-28 items-center py-10 lg:flex-row lg:justify-center space-y-4 lg:space-y-0 lg:space-x-4">
              <Button
                name={'Learn more'}
                style={
                  'uppercase right-16 tracking-widest px-6 md:px-12 py-2 md:py-3 flex items-center justify-center space-x-3 text-lg md:text-2xl'
                }
              >
                <FaArrowRight className="h-4 md:h-8 w-6 md:w-6" />
              </Button>
              {/* Iconos de redes sociales */}
              <div className="flex space-x-8 mt-4 md:mt-0 text-white">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 hover:scale-150 transition-transform duration-200 "
                >
                  <FaInstagram size={40} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 hover:scale-150 transition-transform duration-200"
                >
                  <FaFacebook size={40} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 hover:scale-150 transition-transform duration-200"
                >
                  <FaLinkedin size={40} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
