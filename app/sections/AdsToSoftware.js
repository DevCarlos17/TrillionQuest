"use client";

import { FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Button from "../components/Button";
import { motion } from "framer-motion";

export default function AdsToSoftware() {
  return (
    <div className="min-h-screen w-full">
      <div className="p-4 mx-auto md:flex justify-center items-center">
        {/* Section 1 */}
        <section className="flex flex-col justify-evenly items-center md:items-start space-y-8 md:space-y-20">
          <div className="text-white">
            <motion.h1
              className="text-3xl md:text-5xl font-extrabold mb-8 text-center md:text-start"
              initial={{ x: "50vw", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              From Ads to <br />
              Software development
            </motion.h1>

            <motion.p
              className="text-2xl lg:text-2xl xl:text-3xl text-center md:text-start"
              initial={{ x: "50vw", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              We have proven experts in every aspect of the digital <br />
              landscape, offering a comprehensive range of services <br />
              to elevate your brand and deliver measurable results.
            </motion.p>
          </div>

          {/* Phone Ads Mobile */}
          <div className="md:hidden">
            <Image
              className="sm:h-[50vh] w-[50vh]"
              src={"/images/phoneAds.svg"}
              width={500}
              height={500}
              alt="phoneAds"
            />

            <div className="text-white justify-end flex items-end p-4">
              <ul className="text-xl lg:text-2xl xl:text-3xl">
                {[
                  "Personalized Marketing Campaigns",
                  "Web Development",
                  "Content Creation",
                  "SEO Optimization",
                  "Email Marketing",
                  "Software and App Development",
                  "Process Automation for business",
                ].map((item) => (
                  <li key={item} className="mb-4 flex items-center">
                    • {item}
                    <Image
                      src={"/images/gear.png"}
                      width={100}
                      height={50}
                      alt="gear"
                      className="w-6 h-6 ml-2"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex flex-col justify-center items-center md:items-start">
          <div>
            <Image
              src={"/images/phoneAds.svg"}
              alt="telefono_ads"
              width={580}
              height={580}
              className="hidden md:block h-[70vh] ml-14"
            />

            {/* Botón con flecha */}
            <div className="flex flex-col md:ml-28 items-center py-10 lg:flex-row lg:justify-center space-y-4 lg:space-y-0 lg:space-x-4">
              <Button
                name={"Learn more"}
                style={
                  "uppercase right-16 tracking-widest px-6 md:px-12 py-2 md:py-3 flex items-center justify-center space-x-3 text-lg md:text-2xl"
                }
              >
                <FaArrowRight className="h-4 md:h-8 w-6 md:w-6" />
              </Button>

              {/* Iconos de redes sociales */}
              <div className="hidden sm:flex space-x-4 md:space-x-6 gl:mt-10 ml-20 md:ml-56">
                {[
                  { href: "https://www.tiktok.com/@trillionquest?_t=ZT-8stpLos8kec&_r=1", Icon: FaTiktok },
                  { href: "https://www.instagram.com/trillionquest_?igsh=MWwwbnprYnpneDV4bg==", Icon: FaInstagram },
                  { href: "https://www.linkedin.com/company/trillionquest/", Icon: IoLogoWhatsapp },
                  { href: "https://www.linkedin.com/company/trillionquest/", Icon: FaLinkedin },
                ].map(({ href, Icon }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 hover:scale-150 text-white transition-transform duration-700"
                  >
                    <Icon size={40} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
