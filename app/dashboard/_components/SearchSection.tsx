import { Search } from 'lucide-react';
import React from 'react';

const SearchSection = ({ onSearchInput }:any) => {
    return (
        <div className='p-12  bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col justify-center items-center text-white text-center'>
            <h2 className='text-4xl font-extrabold mb-3'>Browse All Templates</h2>
            <p className='text-lg text-gray-400 mb-6'>What would you like to create today?</p>

            <div className='w-full max-w-xl flex items-center bg-gray-800 p-3 rounded-lg shadow-md border border-gray-700'>
                <Search className='text-gray-400 w-6 h-6' />
                <input
                    type='text'
                    placeholder='Search templates...'
                    onChange={(e)=>onSearchInput(e.target.value)}
                    className='bg-transparent flex-1 outline-none text-white text-lg p-2'
                />
            </div>
        </div>
    );
};

export default SearchSection;
