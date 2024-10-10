import fallback from "../locales/en/fallback.json";

type RecursiveStringMap = {[key: string]: string | RecursiveStringMap}

interface TranslationResource extends RecursiveStringMap {};

const resources: Record<string, TranslationResource> = {
  fallback: fallback as TranslationResource,
} as const;

export default resources;
