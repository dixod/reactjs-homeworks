import { useContext, type ChangeEvent } from 'react';
import { LanguageContext, type Language } from '../context/LanguageContext';

const LANGUAGES: Array<{ value: Language; label: string }> = [
  { value: 'en', label: 'English' },
  { value: 'ru', label: 'Русский' },
  { value: 'es', label: 'Español' },
];

export default function LanguageDropdown() {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    return null;
  }

  const { language, setLanguage, t } = languageContext;

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Language);
  };

  return (
    <select
      className="language-dropdown"
      value={language}
      onChange={handleLanguageChange}
      aria-label={t('language.select')}
    >
      {LANGUAGES.map((currentLanguage) => (
        <option key={currentLanguage.value} value={currentLanguage.value}>
          {currentLanguage.label}
        </option>
      ))}
    </select>
  );
}
