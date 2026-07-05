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
  const handleClick = async (link: string) => {
    // Bisa diganti teksnya biar keliatan lebih menarik
    const clipboardText = `Ayo baca artikel di sini: \n ${window.location.href}`;

    await navigator.clipboard.writeText(clipboardText);
    window.open(link, "_blank");
  };

  return (
    <li>
      <button
        onClick={() => handleClick(href)}
        className="text-gray-400 hover:text-white transition-colors"
      >
        <Icon size={36} />
      </button>
    </li>
  );
}
