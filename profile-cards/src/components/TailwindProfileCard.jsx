import React from 'react';
import profileImage from '../assets/profile.png';

export default function TailwindProfileCard() {
  return (
    <div className="w-[300px] bg-gray-100 border border-gray-300 rounded-lg p-4 text-center">
      <img 
        src={profileImage} 
        alt="avatar" 
        className="w-24 h-24 rounded-full mx-auto" 
      />
      <h2 className="text-2xl font-bold text-black mt-2">Matti Meikäläinen</h2>
      <p className="text-gray-500 mt-1">Full-stack developer, passionate about coding and coffee</p>
      <button className=" w-30 button bg-blue-500 text-white py-2 px-4 rounded-md mt-4 mx-auto block hover:bg-blue-600 cursor-pointer">
        Contact Me
      </button>
      <p className="text-gray-500 mt-1">Created with TailwindCSS</p> 
    </div>
  );
}
