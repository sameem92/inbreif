import { Box, Typography } from "@mui/material"
const Loading = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "2rem",
        background: "#032932",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
      }}
    >
      <div className="loader"></div>
      <Typography variant="h6" sx={{ marginTop: "1.5rem" }} className="loading">
        برجاء الانتظار
      </Typography>
    </Box>
  )
}

export default Loading
