import Link from "next/link";
import { IconType } from "react-icons";

// Terima props 'href' dan 'Icon'
export default function SocialMediaList({
  href,
  Icon,
}: {
  href: string;
  Icon: IconType;
}) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-white transition-colors">
        <Icon size={36} />
      </Link>
    </li>
  );
}
