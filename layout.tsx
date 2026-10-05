import './globals.css';
import Navbar from '../../components/Navbar';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Timora - Learn Smarter. Build Your Future.',
  description: 'AI-powered study assistant curating curated video lectures and materials.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}