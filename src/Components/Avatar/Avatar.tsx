import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";
import avatarImage from "/assets/avatar-min.jpg";
import { memo } from "react";

type LogoProps = {
  style?: StyleXStyles;
  initialTransformOrigin?: string;
};

const Avatar = ({ style }: React.PropsWithChildren<LogoProps>) => {
  return <img src={avatarImage} {...stylex.props(style)} alt="avatar" />;
};

export default memo(Avatar);
