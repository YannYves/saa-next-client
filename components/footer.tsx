import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        borderTop: 1,
        borderColor: "divider",
        py: { xs: 3, sm: 4 },
        position: { xs: "fixed", md: "relative" },
        bottom: 0,
        left: 0,
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            width: "100%",
            px: { xs: 2, sm: 0 },
            fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
          }}
        >
          © {new Date().getFullYear()} Le syndicat apicole artésien. Tous droits
          réservés.
        </Typography>
      </Box>
    </Box>
  );
}
