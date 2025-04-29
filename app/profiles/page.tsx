'use client';

import { useRouter } from "next/navigation";
import ProfileCard from "@/components/ProfileCard";
import CF from "@/public/codeforces_logo.png";
import LC from "@/public/leetcode_logo.png";
import AC from "@/public/atcoder_logo.png";
import CC from "@/public/codechef_logo.jpg";


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
          <h1 className="text-white font-semibold text-3xl">Coding Profiles</h1>
           <ProfileCard imageUrl={CF} MaxRating={"1579"} description={"Specialist"} profileUrl="https://codeforces.com/profile/gg21"/>
           <ProfileCard imageUrl={LC} MaxRating={"2084"} description={"Knight"} profileUrl="https://leetcode.com/u/gg_21/"/>
           <ProfileCard imageUrl={AC} MaxRating={"964"} description={"Green"} profileUrl="https://atcoder.jp/users/gg21"/>
           <ProfileCard imageUrl={CC} MaxRating={"1845"} description={"4 Star"} profileUrl="https://www.codechef.com/users/gg21"/>
        </div>
      </div>
    </div>
  );
}
