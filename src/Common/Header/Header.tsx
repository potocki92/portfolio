import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Logo from "../../Components/Logo/Logo";
import useScroll from "../../hooks/useScroll";
import * as stylex from "@stylexjs/stylex";
import deviceHeightInfo from "../../utils/deviceHeightInfo";
import styles from "./Header.stylex";
import useGlassEffect from "../../hooks/useGlassEffect";
import useCurrentHeight from "../../hooks/useCurrentHeight";
import { animate } from "../../utils/animationOptions";
import useMinHeight from "../../hooks/useMinHeight";

/**
 * Header component representing the header of a webpage with dynamic animations and styling.
 *
 * @component
 * @returns {JSX.Element} The JSX representation of the header component.
 */
const Header = (): JSX.Element => {
  //Ref to the <header> element.
  const headerRef = useRef<HTMLHeadElement>(null);
  //Ref to the inner <div> element in the header.
  const wrapperRef = useRef<HTMLDivElement>(null);
  //Ref to the <Logo> element, which is part of the header.
  const logoRef = useRef<HTMLDivElement>(null);
  //Ref to the <span> element that contains the text "FULLSTACK DEVELOPER."
  const heroHeading = useRef<HTMLSpanElement>(null);

  // Current height of the <Logo> element, tracked using the useCurrentHeight hook.
  const currentHeight = useCurrentHeight(logoRef);

  /**
   * Current scroll position obtained using the useScroll hook.
   * @type {number}
   */
  const scrollPosition: number = useScroll();

  /**
   * Minimum header height adjusted for content wrapped in the <div> element.
   * @type {number}
   */
  const minHeaderHeight: number = useMinHeight(wrapperRef); // Default height for minHeaderHeight

  /**
   * Maximum header height based on device information.
   * @type {number}
   */
  const maxHeaderHeight: number = deviceHeightInfo();

  //State indicating whether the header is larger than a specified height.
  const [isHeaderLarger, setIsHeaderLarger] = useState<boolean>(false);

  /**
   * Calculated header height based on the scroll position.
   * @type {number}
   */
  const headerHeight: number = Math.max(
    minHeaderHeight,
    maxHeaderHeight - Math.min(scrollPosition, maxHeaderHeight),
  );

  /**
   * Flag indicating if the current header height is equal to the minimum header height.
   * @type {boolean}
   */
  const isMinHeaderHeight: boolean = headerHeight === minHeaderHeight;

  //Reference to the glass effect container used in animations.
  const { glassEffectContainerRef, isGlassEffectActive } = useGlassEffect({
    isActive: isMinHeaderHeight,
    duration: 0.5,
  });

  //Effect to update the state based on changes in the logo height.
  useEffect(() => {
    if (headerHeight === minHeaderHeight) {
      console.log(headerHeight, minHeaderHeight);
    }
    if (logoRef.current) {
      setIsHeaderLarger(headerHeight > minHeaderHeight && headerHeight > currentHeight);
    }
  }, [headerHeight, logoRef.current]);

  //Effect to animate the glass effect and header height changes based on changes in headerHeight and isMinHeaderHeight.
  useEffect(() => {
    gsap.to(
      headerRef.current,
      animate({
        height: `${headerHeight}px`,
      }),
    );

    gsap.to(
      glassEffectContainerRef.current,
      animate({
        opacity: isMinHeaderHeight ? 1 : 0,
      }),
    );

    /**
     * Calculate the target top position for the wrapperRef.
     */
    const targetTop = Math.max(-minHeaderHeight / 2 + headerHeight / 2);

    gsap.to(
      wrapperRef.current,
      animate({
        top: `${targetTop / 1.5}px`,
      }),
    );
  }, [headerHeight, isMinHeaderHeight, scrollPosition]);

  /**
   * Effect to handle font size changes.
   */
  useEffect(() => {
    gsap.to(
      [logoRef.current],
      animate({
        fontSize: !isHeaderLarger ? "4vw" : "18vw",
      }),
    );

    gsap.to(
      heroHeading.current,
      animate({
        fontSize: !isHeaderLarger ? "1.5vw" : "7vw",
      }),
    );
  }, [isHeaderLarger]);

  return (
    <header ref={headerRef} {...stylex.props(styles.header)}>
      <div
        ref={wrapperRef}
        className="w-full py-3"
        style={{ position: 'fixed', left: '50%', transform: 'translateX(-50%)' }}
      >
        <div
          ref={glassEffectContainerRef}
          {...stylex.props(styles.glassEffectContainer(headerHeight))}
        ></div>
        <Logo ref={logoRef} />
        <span ref={heroHeading} {...stylex.props(styles.heroHeading)}>
          FULLSTACK DEVELOPER
        </span>
      </div>
    </header>
  );
};

export default Header;
