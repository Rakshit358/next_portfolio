import Image, { StaticImageData } from "next/image";

interface ProfileCardProps {
  imageUrl: StaticImageData;
  MaxRating: string;
  description: string;
  profileUrl: string;
}

export default function ProfileCard(props: ProfileCardProps) {
  return (
    <div className="text-white w-full flex flex-col gap-4">
      <div className="flex items-center justify-start gap-4">
        <a className="text-slate-400 text-sm cursor-pointer hover:text-white hover:underline" href={props.profileUrl}>{props.description}</a>
      </div>
    </div>
  );
}
