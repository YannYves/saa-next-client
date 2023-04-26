import { useRouter } from "next/router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BackButton() {
  const router = useRouter();

  return (
    <button className='hover:underline' onClick={router.back}>
      <h2 className='text-2xl md:text-4xl font-medium tracking-tight md:tracking-tighter leading-tight sm:mb-10 md:mb-20 md:mt-8'>
        <ArrowBackIcon />
        Retour
      </h2>
    </button>
  );
}
