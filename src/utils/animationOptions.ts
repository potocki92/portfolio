import gsap from 'gsap';

type AnimationOptions = {
  fontSize?: string;
  duration?: number | 0.5;
  ease?: string | "power3.out";
};

export const animationOptions = (options: AnimationOptions = {}): gsap.TweenVars => {
  const { fontSize, duration = 0.5, ease = 'power3.out', ...rest } = options;

  const baseOptions: gsap.TweenVars = {
    ...rest,
    fontSize,
    duration,
    ease,
  };

  return baseOptions;
};
