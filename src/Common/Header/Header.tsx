import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Logo from "../../Components/Logo/Logo";
import useScroll from "../../hooks/useScroll";
import useMinHeight from "../../hooks/useMinHeight";
import * as stylex from "@stylexjs/stylex";
import deviceHeightInfo from "../../utils/deviceHeightInfo";
import styles from "./Header.stylex";
import useGlassEffect from "../../hooks/useGlassEffect";
import useCurrentHeight from "../../hooks/useCurrentHeight";
import animationOptions from "../../utils/animationOptions";

/**
 * Functional React component representing the header of a webpage.
 *
 * @returns {JSX.Element} The JSX representation of the header component.
 */
const Header = (): JSX.Element => {
  /*
  Collection of refs for the Header component:
  header - Ref to the <header> element
  wrapper - Ref to the inner <div> element in the header
  logo - Ref to the <Logo> element, which is part of the header
  heroHeading - Ref to the <span> element that contains the text "FULLSTACK DEVELOPER"
*/
  const headerRef = useRef<HTMLHeadElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const heroHeading = useRef<HTMLSpanElement>(null);
  // Current height of the <Logo> element, tracked using the useCurrentHeight hook.
  const currentHeight = useCurrentHeight(logoRef);
  // Current scroll position obtained using the useScroll hook.
  const scrollPosition: number = useScroll();
  // Minimum header height adjusted for content wrapped in the <div> element.
  const minHeaderHeight: number = useMinHeight(wrapperRef);
  // Maximum header height based on device information.
  const maxHeaderHeight: number = deviceHeightInfo();
  // State indicating whether the header is larger than a specified height.
  const [isHeaderLarger, setIsHeaderLarger] = useState<boolean>(false);
  // Calculated header height based on the scroll position.
  const headerHeight: number = Math.max(
    80,
    maxHeaderHeight - Math.min(scrollPosition, maxHeaderHeight),
  );
  // Flag indicating if the current header height is equal to the minimum header height.
  const isMinHeaderHeight: boolean = headerHeight === minHeaderHeight;
  // Reference to the glass effect container used in animations.
  const { glassEffectContainerRef, isGlassEffectActive } = useGlassEffect({
    isActive: isMinHeaderHeight,
    duration: 0.5,
  });

  // Effect to update the state based on changes in the logo height.
  useEffect(() => {
    if (logoRef.current) {
      setIsHeaderLarger(headerHeight > 80 && headerHeight > currentHeight);
    }
  }, [headerHeight, logoRef.current]);

  // Effect to animate the glass effect and header height changes based on changes in headerHeight and isMinHeaderHeight.
  useEffect(() => {
    gsap.to(glassEffectContainerRef.current, {
      opacity: isMinHeaderHeight ? 1 : 0,
      duration: 0.5,
    });

    gsap.to(headerRef.current, {
      height: `${headerHeight}px`,
      duration: 1,
      ease: "power3.out",
    });

    gsap.to(logoRef.current, animationOptions({
      fontSize: !isHeaderLarger ? "5vw" : "18vw",
    }));

    gsap.to(
      heroHeading.current, animationOptions({
        fontSize: !isHeaderLarger ? "2vw" : "7vw",
      }),
    );
  }, [headerHeight, isMinHeaderHeight, isHeaderLarger]);

  return (
    <header ref={headerRef} {...stylex.props(styles.header)}>
      <div ref={wrapperRef} className="w-full py-5">
        <div
          ref={glassEffectContainerRef}
          {...stylex.props(styles.glassEffectContainer(headerHeight))}
        ></div>
        <Logo ref={logoRef} />
        <span ref={heroHeading} {...stylex.props(styles.heroHeading)}>
          FULLSTACK DEVELOPER
        </span>
      </div>
      {/* <Nav /> */}
    </header>
  );
};

export default Header;
