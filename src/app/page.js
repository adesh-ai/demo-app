

'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    // Trigger animations
    const title = document.querySelector('.title');
    const button = document.querySelector('.button');
    
    if (title) {
      title.classList.add('animate__animated', 'animate__fadeIn');
    }
    
    if (button) {
      button.classList.add('animate__animated', 'animate__bounceIn');
    }
  }, []);

  return (
    <>
  
    <div className="relative min-h-screen bg-gradient-to-br from-teal-400 to-blue-600 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[url('/bg-stars.jpg')] bg-cover bg-center opacity-30"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-6">
        <h1 className="text-6xl font-extrabold text-white mb-8 title">
          🎉 Happy Birthday, Ayesha! 🎉
        </h1>
        <p className="text-xl text-white mb-8 animate__animated animate__fadeIn animate__delay-1s">
          We’ve got a special surprise just for you! Click the button below to get your gift and celebrate!
        </p>
        <Link href="/wishes" className="button bg-yellow-500 text-purple-900 py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
          Get Your Gift
        </Link>
      </div>
    </div>
    </>
  );
}

