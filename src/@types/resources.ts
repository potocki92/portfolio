import fallback from '../locales/en/fallback.json';
import ns1 from '../locales/en/ns1.json';

interface TranslationResource {
  title: string;
  hero_about: string;
  description: {
    part1: string;
    part2: string;
  };
  inter: string,
  ABOUT_ME: string;
  EXPERIENCE: string;
  PROJECTS: string;
  SOCIAL_MEDIA: string;
  DESCRIPTION: string;
}
const resources: Record<string, TranslationResource> = {
  fallback: fallback as TranslationResource,
  ns1: ns1 as TranslationResource,
} as const;

export default resources;
