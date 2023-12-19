import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Logo from '../../Components/Logo/Logo';
import Nav from '../../Components/Nav/Nav';
import useScroll from '../../hooks/useScroll';
import useMinHeight from '../../hooks/useMinHeight';
import * as stylex from '@stylexjs/stylex';
import deviceHeightInfo from '../../utils/deviceHeightInfo';

const styles = stylex.create({
  header:(height) => ({
    position: 'sticky',
    top: 0,
    zIndex: 50,
    display: 'flex',
    height,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingX: 5,
    color: 'white',
  }),
  heroHeading: {
    overflow: 'hidden',
    fontWeight: 'bold',
    fontSize: '7vw',
    lineHeight: '100%',
    '@media (min-width: 640px)': {
      fontSize: '8vw',
    },
    textAlign: 'center',
    transition: 'color 0.3s',
  },
  glassEffectText: {
    backdropFilter: 'blur(10px)',
    color: 'rgba(255, 255, 255, 0.8)', // Ustaw kolor tekstu z przezroczystością
  },
});

/**
 * Functional React component representing the header of a webpage.
 * The header includes a logo, a dynamic hero heading, and potentially a navigation menu.
 *
 * @returns {JSX.Element} The JSX representation of the header component.
 */
const Header = () => {
  // References for the header and logo elements
  const headerRef = useRef(null);
  const logoRef = useRef(null);

  // Hooks for handling scroll and minimum header height
  const scrollPosition = useScroll();
  const minHeaderHeight = useMinHeight(logoRef)

  // Maximum header height based on device height
  const maxHeaderHeight = deviceHeightInfo();

  // Calculate the dynamic header height based on scroll and device height
  const headerHeight = Math.max(
    minHeaderHeight,
    maxHeaderHeight - Math.min(scrollPosition, maxHeaderHeight)
  );

  const isGlassEffectTextActive = headerHeight === minHeaderHeight;

  // Use GSAP to animate the header height changes
  useLayoutEffect(() => {
    gsap.to(headerRef.current, { height: `${headerHeight}px`, duration: 1.8, ease: 'power3.out' });
  }, [headerHeight]);

  // Render the header component with logo, hero heading, and potentially navigation menu
  return (
    <header ref={headerRef} {...stylex.props(styles.header(headerHeight) , isGlassEffectTextActive && styles.glassEffectText)}
    >
      <div ref={logoRef}  className='flex flex-col w-full'>

      <Logo/>
      <h1 {...stylex.props(styles.heroHeading)}>
            FULLSTACK DEVELOPER
          </h1>
      </div>
      {/* <Nav /> */}
    </header>
  );
};

export default Header;
