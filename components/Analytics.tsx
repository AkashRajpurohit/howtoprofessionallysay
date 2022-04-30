import Script from 'next/script';

const Umami = () => {
  return (
    <>
      <Script
        async
        defer
        data-cache="true"
        data-website-id="0ef8d12e-17b8-49c9-9c8e-9148683a7123"
        src="https://umami.akashrajpurohit.com/tanjiro.js"
      />
    </>
  );
};

const isProduction = process.env.NODE_ENV === 'production';

const Analytics = () => {
  return <>{isProduction && <Umami />}</>;
};

export default Analytics;
