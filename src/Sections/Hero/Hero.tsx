import Section from '../../Components/Section/Section';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  heroContainer: {
    width: '100%',
    textAlign: 'center',
  },
  heroHeading: {
    overflow: 'hidden',
    fontWeight: 'bold',
    fontSize: '9vw',
    lineHeight: '100%',
    marginBottom: '16px',
    '@media (min-width: 640px)': {
      fontSize: '10vw',
    },
    '@media (min-width: 1024px)': {
      fontSize: '12vw',
    },
  },
});

const Hero = () => {
  return (
    <>
      <Section id="hero">
        <div {...stylex.props(styles.heroContainer)}>
          <h1 {...stylex.props(styles.heroHeading)}>
            FULLSTACK DEVELOPER
          </h1>
        </div>
      </Section>
    </>
  );
};

export default Hero;
