import stylex from "@stylexjs/stylex";
import React, { memo, useState, useMemo, useCallback } from "react";
import styles from "./Nav.stylex";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AlignJustify, X } from "lucide-react";
import Button from "../Button/Button";
import LifeApiComponent from "../../data/lifeApi";
import { Animate } from "../AnimateWrapper/Animation";
import { useScrollLock } from "../../hooks/useScrollLock";

interface NavigationItemsInterface {
  href: string;
  name: string;
}
const NavigationItems = (items: NavigationItemsInterface[]): NavigationItemsInterface[] => {
  return items;
};

const NavItem = ({
  href,
  children,
  isLast,
  ...props
}: React.PropsWithChildren<{ href: string; isLast?: boolean }> &
  React.HTMLAttributes<HTMLLIElement>) => {
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

const Modal = ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useScrollLock(isModalOpen);
  const { Navigation, NavigationText } = LifeApiComponent();

  const memoizedAnimatePresence = useMemo(
    () => (
      <AnimatePresence mode="wait">
        {isModalOpen && (
          <Animate.Backdrop onClick={closeModal}>
            <Animate.Modal onClick={stopPropagation}>
              <div {...stylex.props(styles.bottomMargin, styles.container)}>
                <Button style={styles.navButton} onClick={closeModal}>
                  <X size={16} />
                </Button>
                <h2 {...stylex.props(styles.h2)}>{NavigationText}</h2>
              </div>
              <nav>
                <ul {...stylex.props(styles.ul)}>
                  {NavigationItems(Navigation).map((item, index) => (
                    <NavItem
                      key={item.href}
                      href={item.href}
                      isLast={index === Navigation.length - 1}
                      onClick={closeModal}
                    >
                      {item.name}
                    </NavItem>
                  ))}
                </ul>
              </nav>
            </Animate.Modal>
          </Animate.Backdrop>
        )}
      </AnimatePresence>
    ),
    [isModalOpen, Navigation],
  );

  return memoizedAnimatePresence;
};

export const MobileNav = memo(() => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleButtonClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <>
      <Button onClick={handleButtonClick}>
        <AlignJustify size={16} />
      </Button>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
});

export const Nav = memo(() => {
  const { Navigation } = LifeApiComponent();
  return (
    <nav {...stylex.props(styles.nav)}>
      <ul {...stylex.props(styles.ul)}>
        {NavigationItems(Navigation).map((item) => {
          return (
            <NavItem key={item.href} href={item.href}>
              {item.name}
            </NavItem>
          );
        })}
      </ul>
    </nav>
  );
});
