declare module "browser-lang" {
  interface BrowserLangOptions {
    languages: string[];
    fallback: string;
  }

  function browserLang(options: BrowserLangOptions): string;
  export = browserLang;
}
