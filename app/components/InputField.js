export default function InputField({
  type = 'text',
  name,
  placeholder,
  className = '',
  required = false,
  ...rest
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`w-[50vw] md:w-full gl:w-full h-10 sm:h-[42px] px-3 py-2 rounded-xl bg-white text-center text-black placeholder-black md:text-gray-800 md:placeholder-gray-500 gl:text-gray-800 gl:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${className}`}
      required={required}
      {...rest}
    />
  );
}
