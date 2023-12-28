import gsap from "gsap";

type AnimationOptions = {
  [key: string]: any; // Allow any additional properties
  ease?: string;
  duration?: number;
};

const createAnimationOptions = (options: AnimationOptions = {}): gsap.TweenVars => {
  const { duration = 0.5, ease = "power3.out", ...rest } = options;

  const baseOptions: gsap.TweenVars = {
    ...rest,
    duration,
    ease,
  };

  return baseOptions;
};

const animate = (options: AnimationOptions = {}): gsap.TweenVars => {
  return createAnimationOptions(options);
};

export { createAnimationOptions, animate };
