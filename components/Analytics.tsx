import { isProduction } from 'lib/utils';
import Script from 'next/script';

const Umami = () => {
  const srcUrl = process.env.NEXT_PUBLIC_UMAMI_URL;
  return (
    <>
      <Script
        async
        defer
        data-cache="true"
        data-website-id="0ef8d12e-17b8-49c9-9c8e-9148683a7123"
        src={srcUrl}
      />
    </>
  );
};

const Analytics = () => {
  return <>{isProduction && <Umami />}</>;
};

export default Analytics;
