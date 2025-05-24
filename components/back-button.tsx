import { useRouter } from "next/router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button } from "@mui/material";

export default function BackButton() {
  const router = useRouter();

  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        px: { xs: 2, md: 0 },
        mt: { xs: 2, md: 4 },
        mb: { xs: 2, md: 4 },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Button
        onClick={router.back}
        startIcon={<ArrowBackIcon />}
        sx={{
          backgroundColor: "#fff",
          color: "#222",
          border: "1.5px solid #d1d5db",
          fontWeight: 500,
          fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.15rem" },
          textTransform: "none",
          px: { xs: 1.5, sm: 3 },
          py: { xs: 0.25, sm: 1 },
          borderRadius: 3,
          minHeight: { xs: 34, sm: 40 },
          boxShadow: "none",
          transition: "all 0.2s",
          "&:hover": {
            backgroundColor: "#222",
            color: "#fff",
            border: "1.5px solid #d1d5db",
            textDecoration: "underline",
            boxShadow: "none",
          },
        }}
      >
        Retour
      </Button>
    </Box>
  );
}
