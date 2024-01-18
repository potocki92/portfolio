import { useTransform } from "framer-motion";
import { useScroll } from "framer-motion";

const motionValueScrollYFactory = (values:[string, string]) => {
  const { scrollY } = useScroll();
  return useTransform(scrollY, [0, 500], values);
};

export default motionValueScrollYFactory;
