import { useLayoutEffect, useState, RefObject } from "react";

/**
 * Custom React hook for tracking the current height of a specified DOM element.
 *
 * @param {React.RefObject<HTMLElement>} ref - The React ref object of the DOM element whose height is being tracked.
 * @returns {number} The current height of the specified DOM element in pixels.
 *
 * @example
 * // Usage in a functional component with a ref to a target element
 * const MyComponent = () => {
 *   const targetRef = useRef(null);
 *   const currentHeight = useCurrentHeight(targetRef);
 *   console.log('Current Height:', currentHeight);
 *   // ... rest of the component logic
 * };
 */
const useCurrentHeight = (ref: RefObject<HTMLElement>): number => {
  const [currentHeight, setCurrentHeight] = useState<number>(0);

  useLayoutEffect(() => {
  
    const updateHeight = () => {
      if (ref.current) {
        setCurrentHeight(ref.current.clientHeight);
      }
    };

    updateHeight();

    return () => {
    };
  }, [ref]);

  return currentHeight;
};

export default useCurrentHeight;
