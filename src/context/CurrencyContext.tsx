"use client";

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import UsaFlag from "../../public/flags/USFlag.svg";
import KwFlag from "../../public/flags/KWFlag.svg";
import OmFlag from "../../public/flags/OMFlag.svg";
import SaFlag from "../../public/flags/SAFlag.svg";

// Define currency type
interface Currency {
  code: string;
  symbol: string;
  flag: ReactNode;
}

// Currency mapping with SVG components
const currencyMap: Record<string, Currency> = {
  default: {
    code: "USD",
    symbol: "dollar",
    flag: <UsaFlag />,
  },
  SA: {
    code: "SAR",
    symbol: "rial_saudi",
    flag: <SaFlag />,
  },
  KW: {
    code: "KD",
    symbol: "dinar_kuwaiti",
    flag: <KwFlag />,
  },
  OM: {
    code: "OMR",
    symbol: "rial_omani",
    flag: <OmFlag />,
  },
};

// Define context type
interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
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
  const [currency, setCurrency] = useState<Currency>(currencyMap.default);

  useEffect(() => {
    const storedCurrency = localStorage.getItem("user_currency");
    if (storedCurrency) {
      setCurrency(JSON.parse(storedCurrency));
      return;
    }

    const fetchUserLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();

        const userCountry = data.country_code;
        const newCurrency = currencyMap[userCountry] || currencyMap.default;
        setCurrency(newCurrency);
        localStorage.setItem("user_currency", JSON.stringify(newCurrency));
      } catch (error) {
        console.error("Error fetching user location:", error);
        setCurrency(currencyMap.default);
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
