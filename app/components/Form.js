import InputField from './InputField';

export default function Form() {
  return (
    <div className="w-[70%] md:w-full h-full p-4 sm:p-6 md:p-8 mx-auto mb-10 bg-slate-700 md:bg-slate-900/50 rounded-2xl text-center">
      <div
        className="text-3xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">
        Grow Your Brand
      </div>

      <p className='mb-3 tex-1xl'>
        By partnering with Trillion Quest
      </p>

      <form className="space-y-4 flex flex-col justify-center items-center md:space-y-6 gl:space-y-8 relative z-40">
        <InputField
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
        />

        {/* Email Input */}
        <InputField
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />

        {/* Phone Number Input */}
        <InputField
          type="phoneNumber"
          name="phoneNumber"
          placeholder="Phone Number"
          required
        />

        <button
          type="submit"
          className="w-[50vw] md:w-full gl:w-full h-10 md:h-[42px] gl:h-[84px] px-3 bg-gray-700 border text-white rounded-xl font-bold hover:bg-gray-600 transition-colors duration-200 tracking-wide text-sm md:text-xl"
        >
          Get Your Free Proposal
        </button>
      </form>
    </div >
  );
}
