import * as stylex from "@stylexjs/stylex";
import { Link } from "react-router-dom";

export interface Props {
  href: string;
  icon: React.ElementType;
  style?: stylex.StyleXStyles;
  iconStyle?: stylex.StyleXStyles
}

export const SocialLink = ({ style, iconStyle, href, icon: Icon }: Props) => {
  return (
    <li {...stylex.props(style)}>
      <Link to={href}>
        <Icon {...stylex.props(iconStyle)}/>
      </Link>
    </li>
  );
};
