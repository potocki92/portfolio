import { stylex } from "@stylexjs/stylex";
import React from "react";
import styles from "./Nav.stylex";
import { Link, useLocation } from "react-router-dom";

const NavigationItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Resume',
    href: '/resume',
  },
  {
    name: 'About',
    href: '/about',
  },
] as const;

const NavItem = ({ href, children }: React.PropsWithChildren<{ href: string }>) => {
  return (
    <li>
      <NavLink href={href}>
        {children}
      </NavLink>
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

const Nav = () => {
  return (
    <nav {...stylex.props(styles.nav)}>
      <ul {...stylex.props(styles.list)}>
        {NavigationItems.map((item) => {
            return (
              <NavItem key={item.href} href={item.href}>
                {item.name}
              </NavItem>
            )
          
        })}
      </ul>
    </nav>
  );
};

export default Nav;
