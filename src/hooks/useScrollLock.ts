import { useEffect, useRef } from "react";

export const useScrollLock = (lock: boolean) => {
  const originalOverflow = useRef("");

  useEffect(() => {
    if (lock) {
      // Save the original overflow value
      originalOverflow.current = document.body.style.overflow;

      // Apply the lock
      document.body.style.overflow = "hidden";
    } else {
      // Restore the original overflow value
      document.body.style.overflow = originalOverflow.current;
    }

    return () => {
      // Cleanup function
      document.body.style.overflow = originalOverflow.current;
    };
  }, [lock]);
};
