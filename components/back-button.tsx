import { useRouter } from "next/router";
import { Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button sx={{ textTransform: "none" }} onClick={router.back}>
      <Typography variant='h5' mb={2} mt={8} fontWeight='bold'>
        <ArrowBackIcon sx={{ mr: 1 }} />
        Retour
      </Typography>
    </Button>
  );
}
