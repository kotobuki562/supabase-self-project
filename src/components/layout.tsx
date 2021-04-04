import type { ReactNode, VFC } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";

type Props = {
  children: ReactNode;
  meta?: {
    pageName?: string;
    description?: string;
    cardImage?: string;
  };
};

export const Layout: VFC<Props> = (props) => {
  const router = useRouter();
  const meta = {
    title: props.meta?.pageName,
    description: props.meta?.description,
    cardImage: props.meta?.cardImage,
    ...props.meta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <link href="/icon/16.ico" rel="shortcut icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon/180.png" />
        <link rel="icon" sizes="32x32" href="/icon/32.ico" />
        <link rel="icon" sizes="16x16" href="/icon/16.ico" />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://emoji-diary.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@polgonfoods" />
        <meta name="twitter:creator" content="@NEKO_and_SPA" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
      </Head>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
