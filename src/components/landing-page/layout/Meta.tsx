import Head from "next/head";
import Link from "next/link";

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <Link
          legacyBehavior
          rel="apple-touch-icon"
          href={`/apple-touch-icon.png`}
          key="apple"
        />
        <Link
          legacyBehavior
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/favicon-32x32.png`}
          key="icon32"
        />
        <Link
          legacyBehavior
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/favicon-16x16.png`}
          key="icon16"
        />
        <Link legacyBehavior rel="icon" href={`/favicon.ico`} key="favicon" />
      </Head>
    </>
  );
};

export { Meta };
