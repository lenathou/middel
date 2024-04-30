import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';  // Correct import statement for useRouter
import Barberlogo from "../../img/goldenlogo.svg";
import CameraIcon from '../../icons/camera.svg';
import HomeIcon from '../../icons/home.svg';
import UserIcon from '../../icons/user.svg';
import CustomButton from './CustomButton';

// Variants for the animations of navigation items
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120
    }
  },
  closed: {
    y: -20,
    opacity: 0,
    transition: {
      type: 'spring',
      stiffness: 120
    }
  }
};

// Component for navigation items including logo and icons
const SidebarNavigationItems = ({ isOpen, toggleOpen }) => {
  const router = useRouter();  // Correctly initialize useRouter here inside the component

  // Function to handle delayed navigation
  const delayedNavigation = (e, href) => {
    e.preventDefault();  // Prevent immediate navigation
    toggleOpen();  // Close the sidebar immediately
    setTimeout(() => {
      router.push(href);  // Navigate after a delay of 0.4 seconds
    }, 700);
  };

  return (
    <motion.ul
      className="flex flex-col items-center justify-center p-5 space-y-4"
      variants={{
        open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
        closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
      }}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
    >
      <Barberlogo style={{ fill: 'white', height: '150px', width: '150px' }} />
      <div style={{ width: '80%' }} className="mt-15">
        {[
          { href: "/", label: "Accueil", Icon: HomeIcon },
          { href: "/services", label: "Services", Icon: CameraIcon },
          { href: "/gallery", label: "Galerie", Icon: CameraIcon },
          { href: "/about", label: "À Propos", Icon: UserIcon }
        ].map(({ href, label, Icon }) => (
          <motion.li key={href} variants={itemVariants}>
            <Link 
              href={href} 
              onClick={(e) => delayedNavigation(e, href)}
              className="flex justify-center font-semi-bold hover:text-gray-500 mb-8"
            >
              <Icon style={{ marginRight: '10px', width: '15%' }} />
              <span style={{ width: '45%' }} className='font-semibold'>{label}</span>
            </Link>
          </motion.li>
        ))}
        <motion.div variants={itemVariants} className='flex justify-center'>
          <Link href="/reservation" onClick={(e) => delayedNavigation(e, "/reservation")} passHref>
            <CustomButton>Prenez Rendez-vous</CustomButton>
          </Link>
        </motion.div>
      </div>
    </motion.ul>
  );
};

export default SidebarNavigationItems;
