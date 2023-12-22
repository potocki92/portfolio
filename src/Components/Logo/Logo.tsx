import { forwardRef } from 'react';
import type {StyleXStyles} from '@stylexjs/stylex';
import * as stylex from "@stylexjs/stylex";
import styles from './Logo.stylex';

type LogoProps = {
  fontSize?: string,
  style?: StyleXStyles
};

const Logo = forwardRef<HTMLDivElement, LogoProps>((props, ref) => {
  const { fontSize, style} = props
  return (
    <div
      ref={ref}
      id="logo"
      {...stylex.props(styles.logo(fontSize), style)}
    >
      POTOCKI
    </div>
  );
});

export default Logo;
