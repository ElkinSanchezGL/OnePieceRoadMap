import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { PricingPlan } from "../../components/PricingPlan";

interface Plan {
  title: string;
  price: string;
  features: string[];
  highlight?: boolean;
}

export const PlansView = () => {
  const { t, i18n } = useTranslation();

  const currency = useMemo(() => {
    switch (i18n.language) {
      case "es":
        return "COP";
      case "fr":
      case "de":
        return "EUR";
      case "jp":
        return "JPY";
      default:
        return "USD";
    }
  }, [i18n.language]);

  const conversionRates: Record<string, number> = {
    USD: 1,
    COP: 4000,
    EUR: 0.92,
    JPY: 155,
  };

  const currencySymbols: Record<string, string> = {
    USD: "$",
    COP: "$",
    EUR: "€",
    JPY: "¥",
  };

  const formatPrice = (usdPrice: number) => {
    const converted = usdPrice * conversionRates[currency];
    const rounded = currency === "COP" ? Math.round(converted) : converted.toFixed(2);
    return `${currencySymbols[currency]}${rounded}`;
  };

  const plans: Plan[] = [
    {
      title: t("plans.basic"),
      price: formatPrice(0),
      features: [t("plans.limitedAccess"), t("plans.ads"), t("plans.readOnly")],
    },
    {
      title: t("plans.standard"),
      price: `${formatPrice(4.99)} / ${t("plans.month")}`,
      features: [t("plans.fullAccess"), t("plans.noAds"), t("plans.favorites")],
      highlight: true,
    },
    {
      title: t("plans.premium"),
      price: `${formatPrice(9.99)} / ${t("plans.month")}`,
      features: [t("plans.allIncluded"), t("plans.prioritySupport"), t("plans.earlyAccess")],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-500 p-10">
      <h1 className="text-4xl font-bold text-white text-center mb-10">{t("plans.choosePlan")}</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <PricingPlan key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};
