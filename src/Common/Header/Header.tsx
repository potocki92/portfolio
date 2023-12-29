import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import Logo from "../../Components/Logo/Logo";
import useScroll from "../../hooks/useScroll";
import * as stylex from "@stylexjs/stylex";
import deviceHeightInfo from "../../utils/deviceHeightInfo";
import styles from "./Header.stylex";
import useCurrentHeight from "../../hooks/useCurrentHeight";
import { animate } from "../../utils/animationOptions";
import Wrapper from "../../Components/Wrapper/Wrapper";
import Nav from "../../Components/Nav/Nav";
/**
 * Header component representing the header of a webpage with dynamic animations and styling.
 *
 * @component
 * @returns {JSX.Element} The JSX representation of the header component.
 */
const Header = (): JSX.Element => {
  // Refs...
  const headerRef = useRef<HTMLHeadElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const heroHeading = useRef<HTMLSpanElement>(null);

  // Current height of the <Logo> element, tracked using the useCurrentHeight hook.
  const currentHeight = useCurrentHeight(logoRef);

  
/**
   * Minimum header height adjusted for content wrapped in the <div> element.
   * @type {number}
   */
const minHeaderHeight: number = 74
  /**
   * Maximum header height based on device information.
   * @type {number}
   */
  const maxHeaderHeight: number = deviceHeightInfo();

  //State indicating whether the header is larger than a specified height.
  const [isHeaderLarger, setIsHeaderLarger] = useState<boolean>(false);
  /**
     * Current scroll position obtained using the useScroll hook.
     * @type {number}
     */
  const scrollPosition: number = useScroll();
  
  /**
   * Calculated header height based on the scroll position.
   * @type {number}
   */
  const headerHeight: number = Math.max(
    minHeaderHeight,
    maxHeaderHeight - Math.min(scrollPosition, maxHeaderHeight),
  );
  const [targetTop, setTargetTop] = useState<number>(
    Math.max(-minHeaderHeight / 2 + headerHeight / 2),
  );

  // Effect to update the state based on changes in the logo height.
  useEffect(() => {
    if (wrapperRef.current) {
      const isLarger =
        headerHeight > minHeaderHeight * 2 && headerHeight > currentHeight;
      setIsHeaderLarger(isLarger);
    }
  }, [headerHeight, currentHeight]);

  // Effect to animate the glass effect and header height changes based on changes in scrollPosition.
  useEffect(() => {
    gsap.to(
      headerRef.current,
      animate({
        height: `${headerHeight}px`,
      }),
    );

    const updatedTargetTop = Math.max(-minHeaderHeight / 2 + headerHeight / 2);
    setTargetTop(updatedTargetTop);

    gsap.to(
      wrapperRef.current,
      animate({
        top: isHeaderLarger ? `${targetTop / 1.5}px` : "10"
      }),
    );
    
  }, [scrollPosition, isHeaderLarger]);

  // Effect to handle font size changes based on the state of isHeaderLarger.
  useEffect(() => {
    gsap.to(
      [logoRef.current],
      animate({
        fontSize: !isHeaderLarger ? "clamp(1.3rem, 4vw, 18rem)" : "clamp(1.3rem, 18vw, 18rem)",
      }),
    );

    gsap.to(
      heroHeading.current,
      animate({
        fontSize: !isHeaderLarger ? "clamp(0.5rem, 1.5vw, 7rem)" : "clamp(0.5rem, 6.6vw, 7rem)",
      }),
    );
  }, [isHeaderLarger]);
  
  return (
    <header ref={headerRef} {...stylex.props(styles.header)}>
      <Wrapper
        ref={wrapperRef}
        style={isHeaderLarger ? styles.headerWrapper : styles.transform}
      >
        <Logo ref={logoRef} />
        <span ref={heroHeading} {...stylex.props(styles.heroHeading)}>
          FULLSTACK DEVELOPER
        </span>
      </Wrapper>
      <Nav height={minHeaderHeight}/>
    </header>
  );
};

export default Header;
