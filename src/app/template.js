"use client"
import { motion, AnimatePresence } from 'framer-motion';

// Configuration des variantes pour les animations de transition
const pageVariants = {
    initial: {
        opacity: 0,
        x: "100vw",  // Commence à 100% de la largeur de la vue à droite
        scale: 0.8
    },
    in: {
        opacity: 1,
        x: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        x: "-100vw",  // Sort à 100% de la largeur de la vue à gauche
        scale: 1.2
    }
};

// Configuration des options de transition
const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
};

// Composant Template pour englober les pages avec des transitions
const PageTransitionTemplate = ({ children }) => (
  <AnimatePresence >

    <motion.div
        initial="initial"  // Etat initial
        animate="in"       // Etat d'animation lors de l'entrée
        exit="out"         // Etat d'animation lors de la sortie
        variants={pageVariants}  // Utilisation des variantes définies ci-dessus
        transition={pageTransition}  // Utilisation des options de transition
        className="container mx-auto px-4"
    >
        {children}  
    </motion.div>
    </AnimatePresence>
);

export default PageTransitionTemplate;
