import { useTransform } from "framer-motion";
import { useScroll } from "framer-motion";

const useMotionValueScrollYFactory = (
  values: [string, string],
  scrollRange: [number, number] = [0, 250],
) => {
  const { scrollY } = useScroll();
  return useTransform(scrollY, scrollRange, values);
};

export default useMotionValueScrollYFactory;
