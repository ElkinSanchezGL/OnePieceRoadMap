export const getPricesByLanguage = (lang: string) => {
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

  const getCurrency = (lang: string): keyof typeof conversionRates => {
    switch (lang) {
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
  };

  const currency = getCurrency(lang);

  const formatPrice = (usdPrice: number) => {
    const converted = usdPrice * conversionRates[currency];
    const rounded = currency === "COP" ? Math.round(converted) : converted.toFixed(2);
    return `${currencySymbols[currency]}${rounded}`;
  };

  return {
    currency,
    plans: {
      basic: formatPrice(0),
      standard: `${formatPrice(4.99)}`, 
      premium: `${formatPrice(9.99)} `,
    },
  };
};
