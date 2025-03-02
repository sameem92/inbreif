import { Box, Typography } from "@mui/material";

const FieldWrapper = ({ children, title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: ".6rem", md: "1.6rem" },
        width: "100%",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: "1.6rem",
          fontWeight: 500,
          lineHeight: "2.4rem",
          color: "#fff",
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default FieldWrapper;
