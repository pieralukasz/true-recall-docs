/// <reference path="../.astro/types.d.ts" />

declare module "virtual:starlight/user-config" {
  const config: import("@astrojs/starlight/types").StarlightConfig;
  export default config;
}

declare module "virtual:starlight/components/LanguageSelect" {
  const LanguageSelect: typeof import("astro").AstroComponentFactory;
  export default LanguageSelect;
}

declare module "virtual:starlight/components/Search" {
  const Search: typeof import("astro").AstroComponentFactory;
  export default Search;
}

declare module "virtual:starlight/components/SiteTitle" {
  const SiteTitle: typeof import("astro").AstroComponentFactory;
  export default SiteTitle;
}

declare module "virtual:starlight/components/ThemeSelect" {
  const ThemeSelect: typeof import("astro").AstroComponentFactory;
  export default ThemeSelect;
}
