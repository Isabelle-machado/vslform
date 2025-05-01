
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialCardProps {
  videoUrl: string;
  username: string;
  role?: string;
  avatarSrc?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ videoUrl, username, role, avatarSrc }) => {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl shadow-black/30 border border-zinc-800">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={videoUrl}
          title="Depoimento"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex flex-col items-center p-4">
        <div className="flex items-center mb-2">
          <Avatar className="h-8 w-8 mr-2">
            {avatarSrc ? (
              <AvatarImage src={avatarSrc} alt={username} />
            ) : (
              <AvatarFallback>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </AvatarFallback>
            )}
          </Avatar>
          <span className="text-sm text-gray-300 font-satoshi">{username}</span>
        </div>
        {role && <span className="text-xs text-gray-400 text-center font-satoshi">{role}</span>}
      </div>
    </div>
  );
};

export default TestimonialCard;
