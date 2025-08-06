'use client';

import { UserButton } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const quotes = [
  "✨ Consistency is the key to mastery.",
  "🚀 Build every day, ship every week.",
  "💡 Ideas are easy. Execution is everything.",
  "🔥 Hustle in silence, let success make the noise.",
  "🧠 Learn. Build. Repeat.",
];

const Header = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full bg-gray-900 border-b border-white shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow hover:shadow-lg transition-all cursor-pointer">
            🔥 Join Membership for <span className="font-bold">₹699/month</span>
          </div>
        </div>

        <div className="text-sm text-gray-300 font-medium italic text-center flex-1">
          {quotes[quoteIndex]}
        </div>

        <div className="ml-auto">
          <UserButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
