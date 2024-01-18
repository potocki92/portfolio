import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";
import { motion } from "framer-motion";
import { globalTokens as $, colors  } from "../../styles/globalTokens.stylex";
import motionValueScrollYFactory from "../../utils/motionValueScroll";
import image from "../../assets/bozenka.jpg"

type LogoProps = {
  style?: StyleXStyles;
  initialTransformOrigin?: string
};

const styles = stylex.create({
  circle: {
    position: "absolute",
    left: 0,
    top: ".75rem",
    width: "4rem",
    height: "4rem",
    backdropFilter: "blur(8px)",
    backgroundColor: colors.secondBackground,
    borderRadius: $.borderRadius,
    boxShadow: "0 0 0 0 #fff, 0 0 0 1px rgba(24, 24, 27, 0.05), 0 0 0 0 rgba(39, 39, 42, 0.05)"
  },
  img: {
    zIndex: 100,
    width: "4rem",
    height: "4rem",
    objectFit: "cover",
    borderRadius: $.borderRadius
  },
});
const Logo = ({initialTransformOrigin, style}: React.PropsWithChildren<LogoProps>)=> {
  const initialValue = {
    initialY: { max: `145px`, min: `15px` },
    initialTransform: {
      max: `translate3d(.01rem, -.75rem, 0px) scale(1)`,
      min: "translate3d(0rem, -.75rem, 0) scale(0.65)",
    },
    initialImage: {
      max: "translate3d(0rem, 0, 0) scale(1)",
      min: "translate3d(.129rem, 0, 0) scale(0.6)"
    }
  } as const;
  
  const initialTransform = motionValueScrollYFactory([
    initialValue.initialTransform.max,
    initialValue.initialTransform.min,
  ]);
  const initialImageTransform = motionValueScrollYFactory([
    initialValue.initialImage.max,
    initialValue.initialImage.min,
  ])
  return (
    <div id="logo" {...stylex.props(style)}>
      <motion.div {...stylex.props(styles.circle)} 
      style={{ 
        transformOrigin: initialTransformOrigin, 
        transform: initialTransform
      }}
      ></motion.div>
      <motion.img src={image} {...stylex.props(styles.img)} style={{ 
        transformOrigin: initialTransformOrigin, 
        transform: initialImageTransform
      }}/>
    </div>
  );
};

export default Logo;
