import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { User } from "lucide-react";

interface ProfileCardProps {
  imageUrl: StaticImageData;
  MaxRating: string;
  description: string;
  profileUrl: string;
}

export default function ProfileCard(props: ProfileCardProps) {
  return (
    <div className="text-white w-full flex flex-col gap-4">
      <div className="w-full border border-amber-50"></div>

      <div className="flex items-center justify-start gap-4">
        <Image
          src={props.imageUrl}
          height={45}
          width={45}
          className="rounded-full"
          alt="Icon"
        />

        <div className="flex-1">
          <p className="text-white text-sm font-semibold">
            Max. Rating: {props.MaxRating}
          </p>

          <p className="text-white text-sm font-semibold">
            {props.description}
          </p>
        </div>

        <Link
          href={props.profileUrl}
          className="flex items-center gap-1 text-sm font-medium text-amber-50 hover:text-amber-200"
        >
          <User size={18} />
          View Profile
        </Link>
      </div>
    </div>
  );
}
