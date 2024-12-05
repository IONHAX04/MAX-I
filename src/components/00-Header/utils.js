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
import { Images } from "lucide-react";
import { Play } from "lucide-react";
import { MapPin } from "lucide-react";
import { Database } from "lucide-react";

export const Menus = [
  {
    name: "Home",
    route: "/home",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Services",
    route: "/service",
    subMenuHeading: ["SEO", "Content", "Development"],
    subMenu: [
      {
        name: "Search Engine Optimisation",
        desc: "SEO",
        route: "/seo",
        icon: SearchCheck,
      },
      {
        name: "Content Marketing",
        desc: "Link pages",
        route: "/content-marketing",
        icon: NotepadText,
      },
      {
        name: "Web Design",
        desc: "Development",
        icon: LayoutTemplate,
        route: "/web-dev",
      },
      {
        name: "Search Engine Marketing",
        desc: "SEM",
        icon: Settings,
        route: "/search-engine-marketing",
      },
      {
        name: "Brand Management",
        desc: "Link pages",
        icon: TableOfContents,
        route: "/brand-management",
      },
      {
        name: "Social Media Managemen",
        desc: "Application",
        icon: Database,
        route: "/social-media-management",
      },
      {
        name: "App Store Optimization",
        desc: "ASO",
        icon: Bolt,
        route: "/app-store-optimization",
      },
      {
        name: "Social Media Ads",
        desc: "SMA",
        icon: LayoutTemplate,
        route: "/social-media-advertising",
      },
    ],
    gridCols: 3,
  },
  {
    name: "Works",
    route: "/works",
    subMenuHeading: ["Posters", "Designs", "Videos"],
    subMenu: [
      {
        name: "Print Posters",
        desc: "Posters",
        icon: ShoppingBag,
        route: "/posters",
      },
      {
        name: "Web Designs",
        desc: "Website",
        icon: BellDot,
        route: "/web-design",
      },
      {
        name: "Videos",
        desc: "Watch Videos",
        icon: Play,
        route: "/videos",
      },
      {
        name: "Social Media",
        desc: "Social Media Posters",
        icon: MapPin,
        route: "/social-posters",
      },
      {
        name: "Logo Designs",
        desc: "Logo",
        icon: Images,
        route: "/logo-designs",
      },
    ],
    gridCols: 3,
  },
  // {
  //   name: "Blogs",
  //   route: "/blogs",
  // },
  {
    name: "Contact Us",
    route: "/contact",
  },
];
