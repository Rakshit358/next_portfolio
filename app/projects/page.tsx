'use client';

import { useRouter } from "next/navigation";
import ProjectCard from "@/components/ProjectCard";
import { Github } from "lucide-react";

export default function Page() {
  const router = useRouter();
  return (
    <div className="h-screen relative bg-black">
    <div className="absolute top-4 right-4 text-gray-400 flex justify-center items-center gap-2 bg-gray-900 rounded-3xl text-[12px] font-medium">
          <button 
          onClick={() => router.push('/')}
          className="transition-colors duration-350 ease-in-out hover:bg-gray-700 hover:text-white rounded-full p-2">
             Home
          </button>
          <button
          onClick={() => router.push('/projects')}
          className="transition-colors duration-350 ease-in-out hover:bg-gray-700 hover:text-white rounded-full p-2">
             Projects
          </button>
          <button
           onClick={() => router.push('/profiles')}
          className="transition-colors duration-350 ease-in-out hover:bg-gray-700 hover:text-white rounded-full p-2">
            Profiles
          </button>       
      </div>

      <div className="flex h-full justify-center items-center"> 
        <div className="flex flex-col items-start gap-4 w-full max-w-2xl px-4">
          <h1 className="text-white font-semibold text-3xl">Projects</h1>

          <ProjectCard 
            name="Areos Shell" 
            techStack="C++, MSYS2, GTKmm 4.0" 
            date="Mar 2025 - Present" 
            description="A custom terminal shell featuring integrated GUI support, designed to enhance the user experience by combining graphical and command-line interfaces."
          />

          <ProjectCard 
            name="Chatify" 
            techStack="React, Node.js, Tailwind CSS, Socket.io" 
            date="June 2024 - July 2024" 
            description="A full-stack real-time chat application built with the MERN stack, enabling users to send and receive messages instantly through WebSocket technology."
          />

          <ProjectCard 
            name="SkimLit" 
            techStack="TensorFlow, Python" 
            date="Aug 2024 - Oct 2024" 
            description="A machine learning model that classifies sections of medical research papers to improve readability and help users quickly understand key content."
          />

          <a
            href="https://github.com/Rakshit358"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white transition-colors duration-300 ease-in-out rounded-3xl px-4 py-2 text-sm font-medium"
          >
            <Github className="w-5 h-5" />
            More Projects
          </a>
        </div>
      </div>
    </div>
  );
}
