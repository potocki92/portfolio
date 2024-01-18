import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";
import { globalTokens as $  } from "../../styles/globalTokens.stylex";
import image from "../../assets/vite.svg"
type LogoProps = {
  style?: StyleXStyles;
};

const styles = stylex.create({
  img: {
    width: "4rem",
    height: "4rem",
    objectFit: "cover",
    borderRadius: $.borderRadius
  },
});
const Logo = (props: LogoProps) => {
  const { style } = props;
  return (
    <div id="logo" {...stylex.props(style)}>
      <img src={image} {...stylex.props(styles.img)}/>
    </div>
  );
};

export default Logo;
