import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

export const iconNet = [
  {
    id: 1,
    icon: <FaFacebookSquare size={30} className="text-blue-500" />,
    style: "  hover:",
    link: "https://www.facebook.com/",
  },
  {
    id: 2,
    icon: <FaGithub size={30} className="text-orange-500" />,
    style: " hover:",
    link: "https://github.com/",
  },
  {
    id: 3,
    icon: <FaLinkedin size={30} className="text-blue-800" />,
    style: "  hover:",
    link: "https://www.linkedin.com/",
  },
  {
    id: 4,
    icon: <FaTwitter size={30} className="text-blue-600" />,
    style: " hover:",
    link: "https://twitter.com/",
  },
];

export const textFooter = [
  {
    brand: "CyberMovie",
    content: ["My Account", "My Movies", "My Reviews"],
  },

  {
    brand: "Terms of Use",
    content: ["Privacy Policy", "Hembitnoigi", "Upcoming"],
  },
];
