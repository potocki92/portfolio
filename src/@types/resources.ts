import fallback from "../locales/en/fallback.json";

interface TranslationResource {
  navigation: {
    home: string;
    about: string;
    resume: string;
    projects: string;
  };
  months: {
    january: string;
    february: string;
    march: string;
    april: string;
    may: string;
    june: string;
    july: string;
    august: string;
    september: string;
    october: string;
    november: string;
    december: string;
  };
  present: string;
  projects: {
    invoice: {
      description: string;
    };
    icecream: {
      description: string;
    };
    filmoteka: {
      description: string;
    };
  };
  title: string;
  hero_about: string;
  description: {
    part1: string;
    part2: string;
  };
  inter: string;
  ABOUT_ME: string;
  EXPERIENCE: string;
  PROJECTS: string;
  SOCIAL_MEDIA: string;
  DESCRIPTION: string;
}
const resources: Record<string, TranslationResource> = {
  fallback: fallback as TranslationResource,
} as const;

export default resources;
