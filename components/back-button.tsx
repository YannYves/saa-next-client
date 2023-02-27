import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Container from "./container";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BackButton() {
  const router = useRouter();

  return (
    <div className='lg:py-8 flex flex-col lg:flex-row items-start'>
      <Button
        size='small'
        onClick={() => router.back()}
        variant='contained'
        className='bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0'
        startIcon={<ArrowBackIcon />}
      >
        retour
      </Button>
    </div>
  );
}
