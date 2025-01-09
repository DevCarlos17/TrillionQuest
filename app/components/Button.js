import Link from 'next/link';

export default function Button({ name, style, children, href }) {
  const buttonContent = (
    <button
      className={`border border-white
        bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 
        text-yellow-500 font-bold rounded-full 
        transition-transform duration-300 
        hover:scale-110 hover:bg-gradient-to-r 
        hover:from-yellow-500 hover:via-yellow-300 hover:to-yellow-200 
        hover:text-gray-900 px-0 py-2 ${style}`}
    >
      {name}
      {children && <span className="ml-2">{children}</span>}
    </button>
  );

  return href ? (
    <Link href={href} scroll={true}>
      {buttonContent}
    </Link>
  ) : (
    buttonContent
  );
}
