import {
  Bolt,
  LayoutTemplate,
  NotepadText,
  SearchCheck,
  Settings,
  TableOfContents,
} from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { BellDot } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Images } from "lucide-react";
import { Play } from "lucide-react";
import { MapPin } from "lucide-react";
import { Database } from "lucide-react";

export const Menus = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Services",
    subMenuHeading: ["SEO", "Enterprise", "Development"],
    subMenu: [
      {
        name: "Search Engine Optimisation",
        desc: "SEO",
        icon: SearchCheck,
      },
      {
        name: "Content Marketing",
        desc: "Link pages",
        icon: NotepadText,
      },
      {
        name: "Web Design",
        desc: "Development",
        icon: LayoutTemplate,
      },
      {
        name: "Search Engine Marketing",
        desc: "SEM",
        icon: Settings,
      },
      {
        name: "Content Management",
        desc: "Link pages",
        icon: TableOfContents,
      },
      {
        name: "Cross Platform",
        desc: "Application",
        icon: Database,
      },
      {
        name: "App Store Optimization",
        desc: "ASO",
        icon: Bolt,
      },
    ],
    gridCols: 3,
  },
  {
    name: "Works",
    subMenuHeading: ["Posters", "Designs", "Videos"],
    subMenu: [
      {
        name: "Print Posters",
        desc: "Posters",
        icon: ShoppingBag,
      },
      {
        name: "Web Designs",
        desc: "Website",
        icon: BellDot,
      },
      {
        name: "Videos",
        desc: "Watch Videos",
        icon: Play,
      },
      {
        name: "Social Media",
        desc: "Social Media Posters",
        icon: MapPin,
      },
      {
        name: "Logo Designs",
        desc: "Logo",
        icon: Images,
      },
    ],
    gridCols: 3,
  },
  {
    name: "Support",
    subMenu: [
      {
        name: "Help",
        desc: "Help Center",
        icon: CircleHelp,
      },
      {
        name: "Blogs",
        desc: "Recent Blogs",
        icon: MessageCircle,
      },
    ],
    gridCols: 1,
  },
  {
    name: "Contact Us",
  },
];
