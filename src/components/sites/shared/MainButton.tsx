import { Button } from "@mui/material";

const MainButton = ({ title }: { title: string }) => {
  return (
    <Button
      sx={{
        paddingX: "18px",
        borderRadius: 60,
        fontWeight: 600,
        fontSize: "1.375",
        background: "transparent",
        borderColor: "#e1e42a",
        color: "#e1e42a",
        borderWidth: 1,
        borderStyle: "solid",
      }}
    >
      {title}
    </Button>
  );
};

export default MainButton;
