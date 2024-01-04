import type {StyleXStyles} from '@stylexjs/stylex';
import * as stylex from "@stylexjs/stylex";
import styles from './Logo.stylex';

type LogoProps = {
  fontSize?: string,
  style?: StyleXStyles
};

const Logo =((props: LogoProps) => {
  const { fontSize, style} = props
  return (
    <div
      id="logo"
      {...stylex.props(styles.logo(fontSize), style)}
    >
      POTOCKI
    </div>
  );
});

export default Logo;
