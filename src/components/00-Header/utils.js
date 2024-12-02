import { Bolt } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { BellDot } from "lucide-react";
// import { BookOpenText } from "lucide-react";
// import { BriefcaseBusiness } from "lucide-react";
import { CircleHelp } from "lucide-react";
// import { TriangleAlert } from "lucide-react";
// import { Users } from "lucide-react";
// import { Lock } from "lucide-react";
// import { Dessert } from "lucide-react";
// import { ShieldPlus } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Images } from "lucide-react";
// import { Figma } from "lucide-react";
import { Play } from "lucide-react";
import { MapPin } from "lucide-react";
import { Database } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { PanelTop } from "lucide-react";

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
        name: "SEO",
        desc: "Search Engine Optimisation",
        icon: PanelsTopLeft,
      },
      {
        name: "Content Marketing",
        desc: "Link pages",
        icon: PanelTop,
      },
      {
        name: "Web Design",
        desc: "Development",
        icon: Database,
      },
      {
        name: "SEM",
        desc: "Search Engine Marketing",
        icon: Bolt,
      },
      {
        name: "Content Management",
        desc: "Link pages",
        icon: PanelTop,
      },
      {
        name: "Cross Platform",
        desc: "Application",
        icon: Database,
      },
      {
        name: "ASO",
        desc: "App Store Optimization",
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
