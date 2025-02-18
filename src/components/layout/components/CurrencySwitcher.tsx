import { useCurrency } from "@/context/CurrencyContext";
import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

// Define currency type
interface Currency {
  code: string;
  symbol: string;
  flag: string;
}

// Define currency map
const currencyMap: Record<string, Currency> = {
  default: {
    code: "USD",
    symbol: "dollar",
    flag: "https://flagcdn.com/w20/us.png",
  },
  SAR: {
    code: "SAR",
    symbol: "rial_saudi",
    flag: "https://flagcdn.com/w20/sa.png",
  },
  KD: {
    code: "KD",
    symbol: "dinar_kuwaiti",
    flag: "https://flagcdn.com/w20/kw.png",
  },
  OMR: {
    code: "OMR",
    symbol: "rial_omani",
    flag: "https://flagcdn.com/w20/om.png",
  },
};

const CurrencySwitcher: React.FC = () => {
  const { currency, setCurrency } = useCurrency();
  const locale = useLocale();
  const t = useTranslations("Shared");

  const handleCurrencyChange = (e: SelectChangeEvent<string>) => {
    const selectedCode = e.target.value;
    const newCurrency = currencyMap[selectedCode] || currencyMap.default;
    setCurrency(newCurrency);
  };

  return (
    <>
      {currency.code !== "DE" && locale !== "de" && (
        <Select
          value={currency.code}
          onChange={handleCurrencyChange}
          sx={{
            color: "#fff",
            backgroundColor: "#0B414D",
            borderRadius: "46px",
            height: "31px",
            "& .MuiSelect-icon": {
              color: "#E0E324",
            },
          }}
        >
          {Object.entries(currencyMap).map(([key, cur]) => (
            <MenuItem key={key} value={cur.code}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: locale === "ar" ? "row" : "row-reverse",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <img
                  src={cur.flag || "/placeholder.svg"}
                  alt={`flag`}
                  style={{ width: 25, height: 25, borderRadius: 12.5 }}
                />
                <Typography>{t(cur.code)}</Typography>
              </Box>
            </MenuItem>
          ))}
        </Select>
      )}
    </>
  );
};

export default CurrencySwitcher;
