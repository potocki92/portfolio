import { useLayoutEffect, useState, RefObject } from "react";
/**
 * Custom React hook for dynamically tracking the minimum height of a specified DOM element.
 *
 * @param {React.RefObject<HTMLElement>} ref - The React ref object of the DOM element whose height is being tracked.
 * @returns {number} The current minimum height of the specified DOM element in pixels.
 *
 * @example
 * // Usage in a functional component with a ref to a Logo component
 * const MyComponent = () => {
 *   const logoRef = useRef(null);
 *   const minHeaderHeight = useMinHeight(logoRef);
 *   console.log('Current Min Header Height:', minHeaderHeight);
 *   // ... rest of the component logic
 * };
 */
const useMinHeight = (ref: RefObject<HTMLElement>): number => {
  const [minHeight, setMinHeight] = useState<number>(100);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setMinHeight(ref.current.clientHeight);
        console.log('New height: ', ref.current.clientHeight);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref]);

  return minHeight;
};

export default useMinHeight;
