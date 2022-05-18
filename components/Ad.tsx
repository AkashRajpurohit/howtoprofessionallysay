import { useEffect, useRef } from 'react';

import siteMetadata from 'lib/sitemetadata';

const Ad = () => {
  const reference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reference.current) {
      reference.current.innerHTML = '';
      const s = document.createElement('script');
      s.id = '_carbonads_js';
      s.src = `//cdn.carbonads.com/carbon.js?serve=${siteMetadata.carbonCode}&placement=${siteMetadata.carbonPlacement}`;
      reference.current.appendChild(s);
    }
  }, []);

  return <div ref={reference} />;
};

export default Ad;
