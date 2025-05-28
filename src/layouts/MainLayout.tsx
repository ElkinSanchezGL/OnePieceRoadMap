import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { BurguerDespegable } from '../components/BurguerDespegable';
import LanguageSwitcher from '../components/LanguageSwitcher';

const MainLayout: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && i18n.language.split('-')[0] !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return (
    <>
      <Outlet />
      
      <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 1000 }}>
        <LanguageSwitcher />
      </div>

      <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000 }}>
        <BurguerDespegable />
      </div>
    </>
  );
};

export default MainLayout;
