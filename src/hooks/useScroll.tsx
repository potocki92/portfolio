import { useEffect, useState } from "react";
/**
 * Custom React hook for tracking the scroll position of the window.
 *
 * @returns {number} The current scroll position in pixels.
 *
 * @example
 * // Usage in a functional component
 * const MyComponent = () => {
 *   const scrollPosition = useScroll();
 *   console.log('Current Scroll Position:', scrollPosition);
 *   // ... rest of the component logic
 * };
 */

const useScroll = (): number => {
    const [scrollPosition, setScrollPosition] = useState<number>(0)

    useEffect(() => {
        const handleScroll =() => {
            setScrollPosition(window.scrollY || window.pageXOffset)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return scrollPosition
}

export default useScroll