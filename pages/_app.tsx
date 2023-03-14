import "@/styles/index.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-tailwind/react";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;

const usePreviousRoute = () => {
  const { asPath } = useRouter();

  const ref = useRef<string | null>(null);

  useEffect(() => {
    ref.current = asPath;
  }, [asPath]);

  return ref.current;
};

export { usePreviousRoute };
