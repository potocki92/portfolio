import { stylex } from "@stylexjs/stylex";
import React, { useState } from "react";
import styles from "./Nav.stylex";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Button/Button";

const NavigationItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Resume",
    href: "/resume",
  },
  {
    name: "About",
    href: "/about",
  },
] as const;


const NavItem = ({
  href,
  children,
  isLast,
  ...props
}: React.PropsWithChildren<{ href: string; isLast?: boolean}> & React.HTMLAttributes<HTMLLIElement> ) => {
  return (
    <li {...stylex.props(isLast ? {} : styles.underline)} {...props}>
      <NavLink href={href}>{children}</NavLink>
    </li>
  );
};

const NavLink = ({ href, children }: React.PropsWithChildren<{ href: string }>) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link to={href} {...stylex.props(styles.a, isActive && styles.active)}>
      {children}
    </Link>
  );
};

const backdrop = {
  visible: {opacity: 1},
  hidden: {opacity: 0}
} as const

const modal = {
  hidden: {
    y: "0rem",
    opacity: 0
  },
  visible: {
    y: "2rem",
    opacity: 1,
    transition: { delay: 0.250 }
  }
} as const

const Modal = ({isModalOpen, setIsModalOpen} : {isModalOpen: boolean, setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const closeModal = () => {
    setIsModalOpen(false)
  }

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }
  return (
    <AnimatePresence mode="wait">
      {isModalOpen && (
        <motion.div
          {...stylex.props(styles.backdrop)}
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={closeModal}
        >
          <motion.div {...stylex.props(styles.modal)} variants={modal} onClick={stopPropagation}>
            <div
              {...stylex.props(styles.bottomMargin, styles.container)}
            >
              <Button style={styles.navButton} onClick={closeModal}>
                X
              </Button>
              <h2 {...stylex.props(styles.h2)}>Navigation</h2>
            </div>
            <nav>
              <ul {...stylex.props(styles.ul)}>
                {NavigationItems.map((item, index) => (
                  <NavItem
                    key={item.href}
                    href={item.href}
                    isLast={index === NavigationItems.length - 1}
                    onClick={closeModal}
                  >
                    {item.name}
                  </NavItem>
                ))}
              </ul>
            </nav>
          </motion.div>
        </motion.div>
        )}
    </AnimatePresence>
  )
}

export const MobileNav = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <Button style={styles.button} onClick={() => setIsModalOpen(true)}>Menu</Button>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </>
  );
};


export const Nav = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <nav {...stylex.props(styles.nav)}>
      <ul {...stylex.props(styles.ul)}>
        {NavigationItems.map((item) => {
          return (
            <NavItem key={item.href} href={item.href}>
              {item.name}
            </NavItem>
          );
        })}
      </ul>
    </nav>
  );
};