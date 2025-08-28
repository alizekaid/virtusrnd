import translations from "./translations.json";

const availableLanguages = ["tr", "en"];
let translation_lang_error;

function translate(key, selectedLanguage) {
  let language = selectedLanguage || "tr";
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    const languageFromUrl = urlParams.get("lang");
    language = languageFromUrl || language;
  }

  if (!availableLanguages.includes(language)) {
    console.warn({ translation_lang_error }, language);
    language = "en";
  }

  return translations[key]?.[language] ?? key;
}

translation_lang_error = translate("translation_lang_error");
export { translate, availableLanguages };
