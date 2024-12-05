import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

MobMenu.propTypes = {
  Menus: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      subMenu: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          icon: PropTypes.elementType,
        })
      ),
    })
  ).isRequired,
};

export default function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null); // Track open dropdown index
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null); // Close any open dropdown when closing the menu
  };

  const navigate = useNavigate();

  // Function to navigate to the route
  const onNavigate = (path) => {
    navigate(path);
    setIsOpen(false); // Close the menu after navigation
    window.scrollTo(0, 0); // Scroll to top
  };

  // Function to handle the click on menu items (titles)
  const handleMenuClick = (i, hasSubMenu, route, e) => {
    if (!hasSubMenu) {
      // If there is no submenu, navigate to the route
      onNavigate(route);
    }
    // If there's a submenu, prevent navigation and just toggle dropdown
    e.stopPropagation();
  };

  // Function to handle dropdown arrow click
  const handleArrowClick = (i, e) => {
    // Prevent the arrow click from triggering the menu click
    e.stopPropagation();
    setClicked((prevClicked) => (prevClicked === i ? null : i)); // Toggle dropdown
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <div>
      <button className="lg:hidden z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#18181A] backdrop-blur text-white p-6 pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
          {Menus.map(({ name, subMenu, route }, i) => {
            const isClicked = clicked === i; // Track if dropdown is open
            const hasSubMenu = subMenu?.length; // Check if there is a sub-menu
            return (
              <li key={name} className="">
                <span
                  className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                  onClick={(e) => handleMenuClick(i, hasSubMenu, route, e)} // Handle menu click
                >
                  {name}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto transition-transform duration-300 ${
                        isClicked ? "rotate-180" : ""
                      }`}
                      onClick={(e) => handleArrowClick(i, e)} // Handle dropdown arrow click
                    />
                  )}
                </span>

                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu.map(({ name, icon: Icon, route }) => (
                      <li
                        key={name}
                        onClick={() => onNavigate(route)} // Navigate on sub-menu click
                        className="p-2 flex-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer"
                      >
                        <Icon size={17} />
                        {name}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
