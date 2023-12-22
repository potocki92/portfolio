import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

type useGlassEffectProps = {
    isActive: boolean,
    duration?: number
}

/**
 * Custom React hook for applying a glass effect to a specified DOM element.
 *
 * @param {Object} options - Options for the hook.
 * @param {boolean} options.isActive - A boolean flag indicating whether the glass effect should be active.
 * @param {number} options.duration - The duration of the glass effect animation.
 * @returns {{
*   glassEffectContainerRef: React.MutableRefObject<null>,
*   isGlassEffectActive: boolean
* }} An object containing the ref to the glass effect container and the flag indicating whether the glass effect is active.
*/

const useGlassEffect = ({isActive, duration}: useGlassEffectProps) => {
    const glassEffectContainerRef = useRef(null);
    const [isGlassEffectActive, setIsGlassEffectActive] = useState(false);

    useEffect(() => {
        if (glassEffectContainerRef.current) {
            gsap.to(glassEffectContainerRef.current, {
                opacity: isActive ? 1 : 0,
                duration: duration,
            })
            setIsGlassEffectActive(isActive)
        }
    }, [isActive])

    return { glassEffectContainerRef, isGlassEffectActive}
} 

export default useGlassEffect