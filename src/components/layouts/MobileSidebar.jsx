import React, { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import HamburgerToggle from "../specific/HamburgerToggle";
import NavigationItems from "../specific/SidebarNavigationItems";

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const MobileSidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <motion.nav
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
      className="fixed top-0 left-0 bottom-0 w-64 bg-black text-white z-50 overflow-hidden items-center"
      style={{height: '110vh'}}
      ref={containerRef}
    >
      <HamburgerToggle toggle={() => toggleOpen()} />
      <NavigationItems isOpen={isOpen} toggleOpen={() => toggleOpen()} />
    </motion.nav>
  );
};

export default MobileSidebar;
