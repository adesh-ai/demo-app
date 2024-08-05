'use client';

import { useEffect, useState } from 'react';

export default function Wishes() {
  const [showVideo, setShowVideo] = useState(false);

  const handleGiftClick = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  useEffect(() => {
    // Trigger confetti animation
    const confetti = document.querySelector('.confetti');
    if (confetti) {
      confetti.classList.add('animate');
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 overflow-hidden">
      {/* Confetti animation */}
      <div className="absolute top-0 left-20 w-20 h-30 pointer-events-none confetti">
        <img src="/kitty.jpg" alt="Confetti" className="w-full h-full object-cover" />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-6">
        <h1 className="text-5xl font-extrabold text-white mb-4 animate__animated animate__fadeIn">
          Happy Birthday, Ayesha!
        </h1>
        <img src="/bday-cake.jpg" alt="Birthday Cake" className="w-64 h-64 object-cover rounded-full mb-6 animate__animated animate__zoomIn" />
        <p className="text-lg text-white mb-8 animate__animated animate__fadeIn animate__delay-1s">
          Wishing you a day filled with love, joy, and all your favorite things. 🎉🎂
        </p>
        <button
          onClick={handleGiftClick}
          className="bg-yellow-500 text-purple-900 py-2 px-6 rounded-full shadow-lg hover:bg-yellow-400 transition transform hover:scale-105"
        >
          Gift chahiye????
        </button>
      </div>

      {showVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-20">
          <div className="relative w-full max-w-4xl bg-white p-4 rounded-lg shadow-lg">
            <button
              onClick={handleCloseVideo}
              className="absolute top-2 right-2 text-white text-2xl bg-red-500 rounded-full p-1"
            >
              &times;
            </button>
            <video
              className="w-full h-auto"
              controls
              autoPlay
              onEnded={handleCloseVideo} // Close the video when it ends
            >
              <source src="/gift.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
