import { PiPencilLineFill } from "react-icons/pi";
import { HiCodeBracket } from "react-icons/hi2";
import { IoInfinite } from "react-icons/io5";
import { PiShieldStarBold } from "react-icons/pi";
import { FaPeopleLine } from "react-icons/fa6";

// 直接通过根路径引用 public 文件夹中的图片
const user1 = "/assets/portfolio.webp";

export const navItems = [
   { label: "HeroSection", href: "#" },
   { label: "Sessions", href: "#" },
   { label: "Feedback", href: "#" },
   { label: "Resources", href: "#" },
];

export const features = [
   {
      icon: <PiPencilLineFill />,
      text: "Design",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
   },
   {
      icon: <HiCodeBracket />,
      text: "Build",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, .",
   },
   {
      icon: <IoInfinite />,
      text: "DevOps",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
   },
   {
      icon: <PiShieldStarBold />,
      text: "Security",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
   },
   {
      icon: <FaPeopleLine />,
      text: "Leadership",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, .",
   },
];

export const Feedbacks = [
   {
      user: "Arnold Zhang",
      company: "title",
      image: user1,
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, .",
   },
   {
      user: "Arnold Zhang",
      company: "title",
      image: user1,
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, .",
   },
   {
      user: "Arnold Zhang",
      company: "title",
      image: user1,
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
   },
   {
      user: "Arnold Zhang",
      company: "title",
      image: user1,
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
   },
   {
      user: "Arnold Zhang",
      company: "title",
      image: user1,
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
   },
   {
      user: "Arnold Zhang",
      company: "title",
      image: user1,
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
   },
];

export const resourcesLinks = [
   { href: "#", text: "Getting Started" },
   { href: "#", text: "Documentation" },
   { href: "#", text: "Tutorials" },
   { href: "#", text: "API Reference" },
   { href: "#", text: "Community Forums" },
];

export const platformLinks = [
   { href: "#", text: "Features" },
   { href: "#", text: "Supported Devices" },
   { href: "#", text: "System Requirements" },
   { href: "#", text: "Downloads" },
   { href: "#", text: "Release Notes" },
];

export const communityLinks = [
   { href: "#", text: "Events" },
   { href: "#", text: "Meetups" },
   { href: "#", text: "Conferences" },
   { href: "#", text: "Hackathons" },
   { href: "#", text: "Jobs" },
];
