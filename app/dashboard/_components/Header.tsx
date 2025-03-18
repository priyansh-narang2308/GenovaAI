import { UserButton } from '@clerk/nextjs';
import { Search } from 'lucide-react';
import React from 'react';

const Header = () => {
  return (
    <div className="p-4 bg-gray-900 shadow-lg border-b border-white flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-2 p-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all flex-1 max-w-2xl w-full sm:w-auto">
        <Search className="text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-gray-300 placeholder-gray-500 outline-none w-full"
        />
      </div>

      <div className="bg-gradient-to-r flex gap-5 items-center from-purple-400 to-indigo-500 text-white text-sm font-semibold px-4 py-2  rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer text-center w-full sm:w-auto">
        🔥 Join Membership for <span className="font-bold">₹699/month</span>
      </div>
      <UserButton/>
    </div>
  );
};

export default Header;
