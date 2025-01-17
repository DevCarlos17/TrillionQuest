import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';
import Navbar from './components/Navbar';
import SubFooter from './components/SubFooter';
import Footer from './components/Footer';
import SocialMediaSidebar from './components/SocialMediaSidebar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Trillion Quest - Get your free proposal',
  // description: 'Get your free proposal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <SocialMediaSidebar />
        <div className="min-h-screen bg-black text-white overflow-hidden">
          {children}
        </div>
        <SubFooter />
        <Footer />
      </body>
    </html>
  );
}
