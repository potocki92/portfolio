import stylex from "@stylexjs/stylex";

const MIN_WIDTH = 320;
const MAX_WIDTH = 1920;
const MIN_SCALE = 1.2;
const MAX_SCALE = 1.333;
const MIN_BASE_SIZE = 16;
const MAX_BASE_SIZE = 20;

export const MEDIA = "@media (min-width: 768px)";
const MIN_FONT = {
  xxs: Math.round(MIN_BASE_SIZE / Math.pow(MIN_SCALE, 3) / 0.16) / 100,
  xs: Math.round(MIN_BASE_SIZE / Math.pow(MIN_SCALE, 2) / 0.16) / 100,
  sm: Math.round(MIN_BASE_SIZE / MIN_SCALE / 0.16) / 100,
  p: Math.round(MIN_BASE_SIZE / 4) / 4,
  h5: Math.round((MIN_BASE_SIZE * MIN_SCALE) / 0.16) / 100,
  h4: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 2)) / 0.16) / 100,
  h3: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 3)) / 0.16) / 100,
  h2: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 4)) / 0.16) / 100,
  h1: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 5)) / 0.16) / 100,
};
const MAX_FONT = {
  xxs: Math.round(MAX_BASE_SIZE / Math.pow(MAX_SCALE, 3) / 0.16) / 100,
  xs: Math.round(MAX_BASE_SIZE / Math.pow(MAX_SCALE, 2) / 0.16) / 100,
  sm: Math.round(MAX_BASE_SIZE / MAX_SCALE / 0.16) / 100,
  p: Math.round(MAX_BASE_SIZE / 4) / 4,
  h5: Math.round((MAX_BASE_SIZE * MAX_SCALE) / 0.16) / 100,
  h4: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 2)) / 0.16) / 100,
  h3: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 3)) / 0.16) / 100,
  h2: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 4)) / 0.16) / 100,
  h1: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 5)) / 0.16) / 100,
};
const SLOPE = {
  xxs: (16 * (MAX_FONT.xxs - MIN_FONT.xxs)) / (MAX_WIDTH - MIN_WIDTH),
  xs: (16 * (MAX_FONT.xs - MIN_FONT.xs)) / (MAX_WIDTH - MIN_WIDTH),
  sm: (16 * (MAX_FONT.sm - MIN_FONT.sm)) / (MAX_WIDTH - MIN_WIDTH),
  p: (16 * (MAX_FONT.p - MIN_FONT.p)) / (MAX_WIDTH - MIN_WIDTH),
  h5: (16 * (MAX_FONT.h5 - MIN_FONT.h5)) / (MAX_WIDTH - MIN_WIDTH),
  h4: (16 * (MAX_FONT.h4 - MIN_FONT.h4)) / (MAX_WIDTH - MIN_WIDTH),
  h3: (16 * (MAX_FONT.h3 - MIN_FONT.h3)) / (MAX_WIDTH - MIN_WIDTH),
  h2: (16 * (MAX_FONT.h2 - MIN_FONT.h2)) / (MAX_WIDTH - MIN_WIDTH),
  h1: (16 * (MAX_FONT.h1 - MIN_FONT.h1)) / (MAX_WIDTH - MIN_WIDTH),
};
const INTERCEPT = {
  xxs: Math.round(100 * (MIN_FONT.xxs - SLOPE.xxs * (MIN_WIDTH / 16))) / 100,
  xs: Math.round(100 * (MIN_FONT.xs - SLOPE.xs * (MIN_WIDTH / 16))) / 100,
  sm: Math.round(100 * (MIN_FONT.sm - SLOPE.sm * (MIN_WIDTH / 16))) / 100,
  p: Math.round(100 * (MIN_FONT.p - SLOPE.p * (MIN_WIDTH / 16))) / 100,
  h5: Math.round(100 * (MIN_FONT.h5 - SLOPE.h5 * (MIN_WIDTH / 16))) / 100,
  h4: Math.round(100 * (MIN_FONT.h4 - SLOPE.h4 * (MIN_WIDTH / 16))) / 100,
  h3: Math.round(100 * (MIN_FONT.h3 - SLOPE.h3 * (MIN_WIDTH / 16))) / 100,
  h2: Math.round(100 * (MIN_FONT.h2 - SLOPE.h2 * (MIN_WIDTH / 16))) / 100,
  h1: Math.round(100 * (MIN_FONT.h1 - SLOPE.h1 * (MIN_WIDTH / 16))) / 100,
};

export const text = stylex.defineVars({
  xxs: `clamp(${Math.min(MIN_FONT.xxs)}rem, calc(${INTERCEPT.xxs}rem + ${
    Math.round(10000 * SLOPE.xxs) / 100
  }vw, ${Math.max(MAX_FONT.xxs)})rem)`,
  xs: `clamp(${Math.min(MIN_FONT.xs)}rem, calc(${INTERCEPT.xs}rem + ${
    Math.round(10000 * SLOPE.xs) / 100
  }vw), ${Math.max(MAX_FONT.xs)}rem)`,
  sm: `clamp(${Math.min(MIN_FONT.sm)}rem, calc(${INTERCEPT.sm}rem + ${
    Math.round(10000 * SLOPE.sm) / 100
  }vw), ${Math.max(MAX_FONT.sm)}rem)`,
  p: `clamp(${Math.min(MIN_FONT.p)}rem, calc(${INTERCEPT.p}rem + ${
    Math.round(10000 * SLOPE.p) / 100
  }vw), ${Math.max(MAX_FONT.p)}rem)`,
  h5: `clamp(${Math.min(MIN_FONT.h5)}rem, calc(${INTERCEPT.h5}rem + ${
    Math.round(10000 * SLOPE.h5) / 100
  }vw), ${Math.max(MAX_FONT.h5)}rem)`,
  h4: `clamp(${Math.min(MIN_FONT.h4)}rem, calc(${INTERCEPT.h4}rem + ${
    Math.round(10000 * SLOPE.h4) / 100
  }vw), ${Math.max(MAX_FONT.h4)}rem)`,
  h3: `clamp(${Math.min(MIN_FONT.h3)}rem, calc(${INTERCEPT.h3}rem + ${
    Math.round(10000 * SLOPE.h3) / 100
  }vw), ${Math.max(MAX_FONT.h3)}rem)`,
  h2: `clamp(${Math.min(MIN_FONT.h2)}rem, calc(${INTERCEPT.h2}rem + ${
    Math.round(10000 * SLOPE.h2) / 100
  }vw), ${Math.max(MAX_FONT.h2)}rem)`,
  h1: `clamp(${Math.min(MIN_FONT.h1)}rem, calc(${INTERCEPT.h1}rem + ${
    Math.round(10000 * SLOPE.h1) / 100
  }vw), ${Math.max(MAX_FONT.h1)}rem)`,
});

export const colors = stylex.defineVars({
  primaryText: "rgb(39 39 42/1)",
  secondText: "rgba(63 63 70/1)",
  primaryBackground: "rgb(244 244 245/1)",
  secondBackground: "hsla(0,0%,100%,.9);",
  backdropBackground: "rgba(39,39,42,.4)",
  modalUnderline: "#e5e7eb",
  shadow: "0 1px 15px -2px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  avatarShadow:
    "rgb(47, 47, 50) 0px 0px 0px 0px, rgba(47, 47, 50, 0.2) 0px 0px 0px 1px, rgba(47, 47, 50) 0px 0px 0px 0px",
  transparentAvatarShadow:
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px",
  border: "hsla(0 0% 100%/.9)",
  borderLi: "hsla(0 0% 50%/.2)",
  borderHover: "hsla(0 0% 100%/.9)",
  cardLiBackground: "transparent",
});

export const globalTokens = stylex.defineVars({
  maxWidth: `${MAX_WIDTH}px`,
  contentOffset: "180px",
  borderRadius: "9999px",
  borderButtonRadius: "calc(0.5rem - 2px)",
  borderLi: "1.5rem",
  backgroundColor: { default: colors.primaryBackground },
  color: { default: colors.primaryText },
  globalXPadding: "1.5rem",
  globalYPadding: { default: "calc(3rem - 12px)", [MEDIA]: "5rem" },
  avatarSize: "3.5rem",
  avatarCircleSize: "4rem",
  iconToggleSize: "1rem",
  socialIconSize: "2rem",
  containerGap: "5rem",
  socialGap: "2.5rem",
  maxTitleWidth: "42rem",
  letterTitleSpacing: "-.05em",
  avatarLeft: "1.5rem",
  buttonHeight: "2rem",
  buttonWidth: "2rem",
  avatarWrapperTop: { default: "120px", [MEDIA]: "168px" },
});

export const globalStyles = stylex.create({
  flex: {
    display: "flex",
  },
  flexColumn: {
    flexDirection: "column",
  },
  flexButtons: { display: { default: "flex", [MEDIA]: "none" } },
});
