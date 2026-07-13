import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const socialData = [
  { id: 1, href: "https://x.com/compose/post", icon: FaSquareXTwitter },
  {
    id: 2,
    href: "https://www.facebook.com/stories/create",
    icon: FaFacebookSquare,
  },
  { id: 3, href: "https://instagram.com", icon: FaInstagramSquare },
  {
    id: 4,
    href: "https://www.youtube.com/channel/UC5ItBwyAYFDLckZnV_KE3QQ/posts?show_create_dialog=1",
    icon: FaYoutube,
  },
  { id: 5, href: "https://tiktok.com", icon: FaTiktok },
];
