import { useEffect, useCallback, useRef } from "react";
import { useAnimation } from "framer-motion";
import { useScroll } from "framer-motion";

interface ScrollHandlerOptions {
  onScrollUp?: (speed: number) => void;
  onScrollDown?: (speed: number) => void;
  onScrollLeft?: (speed: number) => void;
  onScrollRight?: (speed: number) => void;
  onScrollThreshold?: (val: number) => void;
  threshold?: number;
  scrollSpeedMultiplier?: number;
  horizontalThreshold?: number;
};

/**
 * Hook `useScrollHandler` is used to handle animations and callbacks related to page scrolling.
 * It allows to react to vertical and horizontal scrolling and call appropriate functions
 * depending on the direction and speed of scrolling.
 *
 * @param {object} options - Configuration options for the hook.
 * @param {function} options.onScrollUp - Function to call when scrolling up.
 * @param {function} options.onScrollDown - Function to call when scrolling down.
 * @param {function} options.onScrollLeft - Function to call when scrolling left.
 * @param {function} options.onScrollRight - Function to call when scrolling right.
 * @param {function} options.onScrollThreshold - Function to call when scrolling reaches a certain threshold.
 * @param {number} options.threshold - The threshold value for scrolling.
 * @param {number} options.scrollSpeedMultiplier - The multiplier for the scroll speed.
 * @param {number} options.horizontalThreshold - The threshold value for horizontal scrolling.
 */
const useScrollHandler = ({
  onScrollUp,
  onScrollDown,
  onScrollLeft,
  onScrollRight,
  onScrollThreshold,
  threshold = 120,
  scrollSpeedMultiplier = 1,
  horizontalThreshold = 120,
}: ScrollHandlerOptions) => {
  const controls = useAnimation();
  const { scrollY, scrollX } = useScroll();
  const lastScrollY = useRef(0);
  const lastScrollX = useRef(0);
  const deltaY = useRef(0);
  const deltaX = useRef(0);

  const handleScrollUp = useCallback(
    (speed: number) => {
      if (onScrollUp) onScrollUp(speed);
    },
    [onScrollUp],
  );

  const handleScrollDown = useCallback(
    (speed: number) => {
      if (onScrollDown) onScrollDown(speed);
    },
    [onScrollDown],
  );

  const handleScrollLeft = useCallback(
    (speed: number) => {
      if (onScrollLeft) onScrollLeft(speed);
    },
    [onScrollLeft],
  );

  const handleScrollRight = useCallback(
    (speed: number) => {
      if (onScrollRight) onScrollRight(speed);
    },
    [onScrollRight],
  );

  const handleScrollThreshold = useCallback(
    (val: number) => {
      if (onScrollThreshold) onScrollThreshold(val);
    },
    [onScrollThreshold],
  );

  useEffect(() => {
    const handleScroll = (valY: number, valX: number) => {
      const diffY = Math.abs(valY - lastScrollY.current) * scrollSpeedMultiplier;
      const diffX = Math.abs(valX - lastScrollX.current) * scrollSpeedMultiplier;

      deltaY.current =
        valY >= lastScrollY.current
          ? Math.min(deltaY.current + diffY, 10)
          : Math.max(deltaY.current - diffY, -10);

      deltaX.current =
        valX >= lastScrollX.current
          ? Math.min(deltaX.current + diffX, 10)
          : Math.max(deltaX.current - diffX, -10);

      if (deltaY.current >= 10 && valY > 525) {
        controls.start("hidden");
        onScrollDown && onScrollDown(diffY);
      } else if (deltaY.current <= -10 || valY < 200) {
        controls.start("visible");
        onScrollUp && onScrollUp(diffY);
      }

      if (deltaX.current >= 10 && valX > horizontalThreshold) {
        onScrollRight && onScrollRight(diffX);
      } else if (deltaX.current <= -10 || valX < horizontalThreshold) {
        onScrollLeft && onScrollLeft(diffX);
      }

      if (onScrollThreshold) {
        onScrollThreshold(valY);
      } else {
        controls.start(valY > threshold ? "color" : "transparent");
      }

      lastScrollY.current = valY;
      lastScrollX.current = valX;
    };

    const unsubscribeY = scrollY.on("change", (val) => handleScroll(val, scrollX.get()));
    const unsubscribeX = scrollX.on("change", (val) => handleScroll(scrollY.get(), val));

    return () => {
      unsubscribeY();
      unsubscribeX();
    };
  }, [
    controls,
    scrollY,
    scrollX,
    handleScrollUp,
    handleScrollDown,
    handleScrollLeft,
    handleScrollRight,
    handleScrollThreshold,
    threshold,
    scrollSpeedMultiplier,
    horizontalThreshold,
  ]);

  return controls;
};

export default useScrollHandler;
