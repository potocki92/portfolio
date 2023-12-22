type AnimationOptions = {
  fontSize?: string;
  duration?: number | 0.5;
  ease?: string | "power3.out";
};

const animationOptions = (options: AnimationOptions): gsap.TweenVars => {
  const { fontSize, duration, ease, ...rest } = options;

  const baseOptions: gsap.TweenVars = {
    ...rest,
  };

  if (fontSize !== undefined) {
    baseOptions.fontSize = fontSize;
  }

  if (duration !== undefined) {
    baseOptions.duration = duration;
  }

  if (ease !== undefined) {
    baseOptions.ease = ease;
  }

  return baseOptions;
};

export default animationOptions;
