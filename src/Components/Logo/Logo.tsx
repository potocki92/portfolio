import { forwardRef } from 'react';
import * as stylex from "@stylexjs/stylex"

const styles = stylex.create({
  logo: {
    width: '100%',
    lineHeight: '100%',
    textTransform: 'uppercase',
    fontWeight: 700,
    overflow: 'hidden',
    fontSize: '18vw',
    '@media (min-width: 640px)': {
      fontSize: '19vw',
    },
    '@media (min-width: 768px)': {
      fontSize: '20vw',
    },
    color: 'rgb(255 255 255 / 1)',
    textAlign: 'center',
    padding: '1.25rem 0 1.25rem 0'
  }
})
const Logo = forwardRef((props, ref) => {

  return (
    <div
      ref={ref}
      id="logo"
      {...stylex.props(styles.logo)}
    >
      POTOCKI
    </div>
  );
});

export default Logo;
