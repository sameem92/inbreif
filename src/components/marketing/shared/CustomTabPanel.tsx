import { Box } from "@mui/material";

interface TabPanelProps {
  index: number | string;
  value: number | string;
  children: React.ReactNode;
}

export function CustomTabPanel(props: TabPanelProps) {
  const { value, index, children, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      sx={{
        width: "100%",
        paddingTop: "3rem",
      }}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </Box>
  );
}
