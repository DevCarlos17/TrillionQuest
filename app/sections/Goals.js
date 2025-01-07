import BoxServices from '../components/BoxServices';
import Button from '../components/Button';
import Slick from '../components/Slick';
import { IoMdArrowRoundForward } from 'react-icons/io';

export default function Goals() {
  return (
    <div className="min-h-screen w-full text-center justify-center">
      <section className="">
        <h1 className="text-5xl font-bold mb-5">
          Achieve Your Goals - TRILLION QUEST
        </h1>
        <h2 className="font-sans text-2xl tracking-widest uppercase mb-1">
          The new digital era is here
        </h2>
        <h2 className="font-sans text-2xl tracking-widest">
          Rated 4.8/5 <span className="text-yellow-500">★★★★★</span> Reviews
        </h2>
      </section>

      <div className="mb-10">
        <BoxServices />
      </div>

      {/* Button Contact Us */}
      <div className="flex h-[10vh] items-center justify-center gap-8">
        {/* Botón */}
        <Button
          name={'Contact Us'}
          style={
            'text-2xl md:text-3xl tracking-widest hidden md:block h-[7vh] px-6'
          }
        />

        {/* Flecha */}
        <IoMdArrowRoundForward
          size={40}
          className="h-10 w-10 text-yellow-500"
        />

        {/* Texto */}
        <div className="flex h-[7vh] items-center">
          <p className="font-bold text-3xl">
            Are you ready to embark on your Trillion Quest?
          </p>
        </div>
      </div>

      <div className='mt-10'>
        <Slick />
      </div>
    </div>
  );
}
