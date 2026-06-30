import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function CompanyPage() {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    return null;
  }

  const { t } = languageContext;

  return (
    <main className="company">
      <h1 className="company-title">{t('company.title')}</h1>
      <p className="company-text">{t('company.description')}</p>
    </main>
  );
}
