import { useRouter } from "next/router";
// TODO ?
import { usePreviousRoute } from "pages/_app";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BackButton() {
  const router = useRouter();

  return (
    <button className='hover:underline' onClick={router.back}>
      <h2 className='text-xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight md:mb-10 md:mt-8'>
        <ArrowBackIcon />
        Retour.
      </h2>
    </button>
  );
}
