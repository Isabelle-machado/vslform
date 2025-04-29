
import React from "react";

interface TextTestimonialCardProps {
  text: string;
  username: string;
  role?: string;
}

const TextTestimonialCard: React.FC<TextTestimonialCardProps> = ({ text, username, role }) => {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg p-6 flex flex-col justify-between h-full transform transition-transform hover:scale-105 hover:shadow-xl shadow-black/30 border border-zinc-800">
      <p className="text-gray-200 italic text-center mb-4 font-satoshi">"{text}"</p>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center mb-2">
          <div className="h-8 w-8 rounded-full bg-gray-700 mr-2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <span className="text-sm text-gray-300 font-satoshi">{username}</span>
        </div>
        {role && <span className="text-xs text-gray-400 text-center font-satoshi">{role}</span>}
      </div>
    </div>
  );
};

export default TextTestimonialCard;
