import { ListItem, ListItemText, Typography } from "@mui/material";
import { useLocale } from "next-intl";
import { FC } from "react";

interface ValueItemProps {
  title: string;
  description: string;
}

const ValueItem: FC<ValueItemProps> = ({ title, description }) => {
  const locale = useLocale();

  return (
    <ListItem
      sx={{
        padding: "0",
        "& .MuiListItem-root": {
          textAlign: "left",
        },
      }}
    >
      <ListItemText
        primary={
          <Typography
            sx={{
              fontSize: { xs: "2rem", lg: "2.7rem" },
              fontWeight: 400,
              lineHeight: "3.7rem",
              color: "#fff",
              position: "relative",
              marginInlineStart: "20px",
              "&:before": {
                position: "absolute",
                content: '""',
                left: locale === "ar" ? "-20px" : undefined,
                right: locale !== "ar" ? "-20px" : undefined,
                flexShrink: 0,
                display: "block",
                height: "8px",
                width: "8px",
                borderRadius: "45%",
                background: "#e1e42a",
                marginTop: "12px",
              },
            }}
          >
            <span style={{ color: "#E1E42A", flexShrink: 0 }}>{title} :</span>
            {description}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default ValueItem;
