import { stylex } from "@stylexjs/stylex";
import React, { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import styles from "./Nav.stylex";
import { Link, useLocation } from "react-router-dom";

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
}: React.PropsWithChildren<{ href: string; isLast?: boolean }>) => {
  return (
    <li {...stylex.props(isLast ? {} : styles.underline)}>
      <NavLink href={href}>{children}</NavLink>
    </li>
  );
};

const NavLink = ({ href, children }: React.PropsWithChildren<{ href: string }>) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link to={href} {...stylex.props(styles.item, isActive && styles.activeItem)}>
      {children}
    </Link>
  );
};

const Nav = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <nav {...stylex.props(styles.nav)}>
      <ul {...stylex.props(styles.list)}>
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

export const MobileNav = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Popover {...stylex.props(styles.popover)}>
      <Popover.Button {...stylex.props(styles.button)} onChange={() => setIsOpen(!isOpen)}>
        Menu
      </Popover.Button>
     
        <Popover.Overlay {...stylex.props(styles.overlay(isOpen))} />
      
      <Transition.Child
        as={Fragment}
        {...stylex.props()}
      >
        <Popover.Panel focus {...stylex.props(styles.panel(isOpen))}>
          <div
            className="flex flex-row-reverse items-center justify-between p-"
            {...stylex.props(styles.container)}
          >
            <Popover.Button aria-label="Close menu" className="-m-1 p-1">
              X
            </Popover.Button>
            <h2 {...stylex.props(styles.bottomMargin)}>Navigation</h2>
          </div>
          <nav>
            <ul {...stylex.props(styles.list)}>
              {NavigationItems.map((item, index) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  isLast={index === NavigationItems.length - 1}
                >
                  {item.name}
                </NavItem>
              ))}
            </ul>
          </nav>
        </Popover.Panel>
      </Transition.Child>
    </Popover>
  );
};
export default Nav;
