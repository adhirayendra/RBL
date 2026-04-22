interface NavbarItem {
  name: string;
  href: string;
}

export const navbarItems: NavbarItem[] = [
  { name: "HOME", href: "/" },
  { name: "ARTICLE", href: "/article" },
  { name: "EVENTS", href: "/events" },
  { name: "PROGRAM", href: "/program" },
  { name: "ABOUT US", href: "/about" }
];