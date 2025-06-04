import { Outlet } from "react-router-dom";
import LanguageSwitcher from "../components/i18n/LanguageSwitcher";

const AuthLayout = () => {
  return (
    <>
      <div
        style={{ position: "fixed", top: "1rem", right: "1rem", zIndex: 1000 }}
      >
        <LanguageSwitcher />
      </div>
      <Outlet />
    </>
  );
};

export default AuthLayout;
