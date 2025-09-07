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

const Rybbit = () => {
  const rybbitSrcUrl = process.env.NEXT_PUBLIC_RYBBIT_URL;
  const rybbitId = process.env.NEXT_PUBLIC_RYBBIT_ID;
  return (
    <>
      <Script
        src={rybbitSrcUrl}
        data-site-id={rybbitId}
        data-track-query="false"
        data-session-replay="true"
        data-track-errors="true"
        data-web-vitals="true"
        async
        defer
      />
    </>
  );
};

const Analytics = () => {
  return (
    <>
      {isProduction && <Umami />}
      {isProduction && <Rybbit />}
    </>
  );
};

export default Analytics;
