"use client"

import { Box, Typography, Button } from "@mui/material"
import { useRouter } from "next/navigation"

const NotFound = () => {
  const router = useRouter()

  const goHome = () => {
    router.push("/")
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "4rem", margin: "2rem 0", fontWeight: "bold" }}>
        404
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: "1.5rem" }}>
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </Typography>

      <Button
        onClick={goHome}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "17rem",
          height: "5rem",
          padding: "1rem 2rem",
          gap: "6px",
          borderRadius: "52px",
          background: "#E0E324",
          backdropFilter: "blur(24px)",
          color: "#001014",
          textAlign: "center",
          fontFamily: "Kumbh Sans, sans-serif !important",
          fontSize: "1.6rem",
          fontWeight: 600,
          lineHeight: "1.6rem",
        }}
      >
        Go Home
      </Button>
    </Box>
  )
}

export default NotFound
