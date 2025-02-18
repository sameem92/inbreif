import React, { createContext, useState, useContext, useEffect } from "react";

// Currency mapping based on country
const currencyMap = {
  default: {
    code: "USD",
    symbol: "dollar",
    flag: "https://flagcdn.com/w20/us.png",
  },
  SA: {
    code: "SAR",
    symbol: "rial_saudi",
    flag: "https://flagcdn.com/w20/sa.png",
  }, // Saudi Arabia
  KW: {
    code: "KD",
    symbol: "dinar_kuwaiti",
    flag: "https://flagcdn.com/w20/kw.png",
  }, // Kuwait
  OM: {
    code: "OMR",
    symbol: "rial_omani",
    flag: "https://flagcdn.com/w20/om.png",
  }, // Oman
  DE: { code: "DE", symbol: "not shown", flag: "" }, // Germany
};

// Define context type
interface CurrencyContextType {
  currency: { code: string; symbol: string };
  setCurrency: (currency: { code: string; symbol: string }) => void;
}

// Create context
const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

// Provider component
export const CurrencyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currency, setCurrency] = useState<{ code: string; symbol: string }>(
    currencyMap.default
  );

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        // Fetch user's country based on IP
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();

        // Set currency based on country code
        const userCountry = data.country_code; // Example: "SA", "KW", etc.
        setCurrency(currencyMap[userCountry] || currencyMap.default);
      } catch (error) {
        console.error("Error fetching user location:", error);
        setCurrency(currencyMap.default); // Default to USD if error occurs
      }
    };

    fetchUserLocation();
  }, []);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

// Custom hook to use the context
export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};
