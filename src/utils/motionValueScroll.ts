import { useTransform } from "framer-motion";
import { useViewportScroll } from "framer-motion";

const motionValueScrollYFactory = (scrollY: any, values: any[]) => {
  return useTransform(scrollY, [0, 500], values);
};

export default motionValueScrollYFactory;
