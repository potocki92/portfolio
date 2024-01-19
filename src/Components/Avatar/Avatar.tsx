import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";
import avatarImage from "../../assets/avatar.jpg";

type LogoProps = {
  style?: StyleXStyles;
  initialTransformOrigin?: string;
};

const Avatar = ({ style }: React.PropsWithChildren<LogoProps>) => {
  return (
      <img
        src={avatarImage}
        {...stylex.props(style)}
      />
  );
};

export default Avatar;
