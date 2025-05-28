import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const languages = [
  { code: "es", label: "🇪🇸 Español" },
  { code: "en", label: "🇬🇧 English" },
  { code: "fr", label: "🇫🇷 Français" },
  { code: "de", label: "🇩🇪 Deutsch" },
  { code: "jp", label: "🇯🇵 日本語" }
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams<{ lang: string }>();

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    await i18n.changeLanguage(selectedLang);

    if (lang) {
      const newPath = location.pathname.replace(`/${lang}`, `/${selectedLang}`);
      navigate(newPath, { replace: true });
    }
  };

  return (
    <select
      value={i18n.language.split('-')[0]}
      onChange={handleChange}
      className="p-2 rounded bg-white border shadow text-black"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
