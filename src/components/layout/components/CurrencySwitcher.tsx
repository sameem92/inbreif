"use client";

import { useCurrency } from "@/context/CurrencyContext";
import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import React, { ReactNode } from "react";
import Image from "next/image";

// Define currency type
interface Currency {
  code: string;
  symbol: string;
  flag: ReactNode;
}

// Define currency map with SVG components
const currencyMap: Record<string, Currency> = {
  default: {
    code: "USD",
    symbol: "dollar",
    flag: <Image src={"/flags/USFlag.svg"} alt=".." width={25} height={25} />,
  },
  SAR: {
    code: "SAR",
    symbol: "rial_saudi",
    flag: <Image src={"/flags/SAFlag.svg"} alt=".." width={25} height={25} />,
  },
  KD: {
    code: "KD",
    symbol: "dinar_kuwaiti",
    flag: <Image src={"/flags/KWFlag.svg"} alt=".." width={25} height={25} />,
  },
  OMR: {
    code: "OMR",
    symbol: "rial_omani",
    flag: <Image src={"/flags/OMFlag.svg"} alt=".." width={25} height={25} />,
  },
};

const CurrencySwitcher: React.FC = () => {
  const { currency, setCurrency } = useCurrency();
  const locale = useLocale();
  const t = useTranslations("Shared");

  console.log(currency);

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
          className="currency"
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
                  flexDirection:
                    typeof window !== "undefined" && locale === "ar"
                      ? "row"
                      : "row-reverse",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {cur.flag}
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
