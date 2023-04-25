import Link from "next/link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ScrollToTopButton from "./scroll-to-top-button";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "accent1.main",
        borderTop: "1px solid accent2.main",
      }}
    >
      <Container>
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={{ xs: 4, lg: 8 }}
          alignItems={{ lg: "center" }}
          py={10}
        >
          <Typography
            variant='h2'
            component='h3'
            fontWeight='bold'
            textAlign={{ xs: "center", lg: "left" }}
            sx={{ flex: "1 1 50%" }}
            mb={{ xs: 10, lg: 0 }}
            pr={{ lg: 8 }}
          >
            Le syndicat apicole artésien
          </Typography>
          <Stack
            direction={{ xs: "column", lg: "row" }}
            justifyContent={{ xs: "center", lg: "flex-start" }}
            spacing={{ xs: 4, lg: 8 }}
            alignItems={{ lg: "center" }}
            sx={{ flex: "1 1 50%" }}
          >
            <Link href='/' passHref>
              <Button
                component='a'
                variant='contained'
                color='primary'
                sx={{
                  px: { xs: 6, lg: 4 },
                  py: 2,
                  fontWeight: "bold",
                  transition: "all 0.2s",
                }}
              >
                Accueil
              </Button>
            </Link>
            <ScrollToTopButton />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
