import { AppProps } from "next/app";
import { supabase } from "../util/supabase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Loading from "../components/parts/Loading/Loading";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname, push } = useRouter();
  const [loading, setLoading] = useState(true);

  supabase.auth.onAuthStateChange((_, session) => {
    if (session?.user && (pathname === "/signin" || pathname === "/signup")) {
      push("/");
    } else if (!session?.user && pathname !== "/signup") {
      push("/signin");
    }
  });

  useEffect(() => {
    (async () => {
      const user = supabase.auth.user();
      if (user && (pathname === "/signin" || pathname === "/signup")) {
        await push("/");
      } else if (!user && pathname !== "/signup") {
        await push("/signin");
      }
      setLoading(false);
    })();
  }, []);

  return (
    <ThemeProvider attribute="class">
      <ChakraProvider resetCSS={false}>
        {loading ? <Loading /> : <Component {...pageProps} />}
      </ChakraProvider>
    </ThemeProvider>
  );
}
