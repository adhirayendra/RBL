import Link from "next/link";

export default function NavbarList({
  link,
  label,
}: {
  link: string;
  label: string;
}) {
  return (
    <Link href={link} className="hover:text-white transition-colors">
      {label}
    </Link>
  );
}
