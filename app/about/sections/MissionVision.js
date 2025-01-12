"use client"

import { motion } from "framer-motion";
import AboutCard from '../components/AboutCard';
import AboutCollageImages from '../components/AboutImagesCollage';
import CardWithImage from '../components/CardWithImage';

export default function MisionVision() {
  return (
    <section className="min-h-screen w-full flex flex-col lg:justify-around items-center space-y-24 ">
      <div>
        <motion.h1 className="text-4xl md:text-5xl font-bold bg-center w-full text-center"
          initial={{ x: "20vw", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 3, ease: "easeOut" }}>
          We are partners in your journey to greatness
        </motion.h1>
      </div>
      {/* Cards */}
      <div className="flex flex-col justify-center lg:flex-row items-center w-full h-[80%] md:w-[80%] 2xl:h-[80%] md:space-x-10   ">
        {/*Card 1 */}
        <AboutCard
          title="Mission"
          content="Unlock the untapped potential of businesses and guide them
                      toward remarkable success through strategic innovation,
                      creative solutions, and unwavering partnership. At
                      Trillion Quest, we empower brands to think bigger, aim
                      higher, and create lasting impact—both in their industries
                      and in the communities around them."
        />

        {/*Card 2 */}
        <CardWithImage />

        {/*Card 3 */}
        <AboutCard
          title="Vision"
          content="Become the catalyst that transforms businesses into icons of
            innovation and success. We envision a world where every company has
            the tools, strategy, and inspiration to scale to new heights,
            breaking limits and redefining their own “impossible.” Our vision
            extends beyond business: we aim to build a better future, where
            success is measured not only by growth but by the positive impact we
            leave behind."
        />
      </div>
      {/* Collage Images */}
      <AboutCollageImages />
    </section>
  );
}
