import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import InputField from "./InputField";

const LoginForm = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    formData.username === "luffy" && formData.password === "1234"
      ? navigate(`/${i18n.language}`)
      : alert(t("login.invalidCredentials"));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-300 transition duration-300 ease-in-out hover:shadow-2xl"
    >
      <InputField id="username" label={t("login.username")} value={formData.username} onChange={handleChange} />
      <InputField id="password" label={t("login.password")} type="password" value={formData.password} onChange={handleChange} />
      <button
        type="submit"
        className="bg-red-800 text-white px-8 py-2 rounded hover:bg-red-500 cursor-pointer w-full mt-4 transition duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-red-600/50"
      >
        {t("login.button")}
      </button>
    </form>
  );
};

export default LoginForm;
