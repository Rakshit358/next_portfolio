'use client';

import { useRouter } from "next/navigation";
import profile from "../public/newDp.jpg"
import collegeLogo from "../public/college_icon.jpg"
import Image from "next/image"
import { Linkedin } from 'lucide-react';

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

      <div className="h-full flex justify-center items-center">
        <div className="flex flex-col items-start gap-8 w-full max-w-2xl px-4">
          
          <div className="flex justify-between items-center gap-14 w-full">
            <div>
              <h1 className="text-white font-semibold text-[30px]">
                Hii, Rakshit here
              </h1>
              <h3 className="text-white text-[15px]">
                From Uttarakhand
              </h3>
            </div>
            <Image
              src={profile}
              width={100}
              height={100}
              className="rounded-full"
              alt="Picture of the author"
            />
          </div>

          <div className="flex flex-col items-start w-full gap-2">
            <h1 className="text-white font-semibold">About</h1>
            <p className="text-gray-400 text-sm font-medium">
                Love doing CP, sometimes building web apps, and diving into ML.
            </p>
            <p className="text-gray-400 text-sm font-medium">
                Into reading blogs, playing cricket, and football. 
            </p>
            <p className="text-gray-400 text-sm font-medium">
                Into folk music, deep thoughts, and the occasional spiritual rabbit hole.
            </p>
          </div>

          <div className="w-full border border-amber-50" />

          <div className="flex flex-col gap-2 w-full">
             <h1 className="text-white font-semibold">Education</h1>

             <div className="flex items-center gap-4 w-full">
               <Image
                 src={collegeLogo}
                 width={40}
                 height={40}
                 className="rounded-full"
                 alt="College Icon"
               />
               <div className="flex items-center justify-between w-full">
                 <div>
                   <h1 className="text-white font-semibold text-sm">
                     Graphic Era Hill University
                   </h1>
                   <h1 className="font-semibold text-xs text-amber-50">
                     Computer Science And Engineering
                   </h1>
                 </div>
                 <span className="text-white text-xs font-medium">
                   2022-2026
                 </span>
               </div>
             </div>

          </div>
        </div>
      </div>
      <footer className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-2 text-gray-400 text-sm">
        <a
          href="https://www.linkedin.com/in/rakshit-benjwal-6967a9296/"
          target="_blank"
          className="hover:text-blue-500 transition-colors"
        >
          <Linkedin size={15} />
        </a>
      </footer>
    </div>
  );
}
