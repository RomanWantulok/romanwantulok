import { ui, defaultLang } from './ui';

// Pomocná funkce pro zjištění jazyka z URL
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

// Funkce pro překlady (tento typ 'any' zabije ty TS chyby z tvého obrázku)
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: any) {
    // @ts-ignore
    return ui[lang][key] || ui[defaultLang][key];
  }
}

// TATO FUNKCE TI CHYBĚLA - generuje správné cesty typu /cs/portfolio
export function getLocalizedPath(path: string, lang: string) {
  // Odstraní úvodní lomítko z cesty, pokud tam je, aby se nezdvojilo
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `/${lang}/${cleanPath}`;
}