import { useCallback, useEffect, useState } from 'react';

export function useCopyToClipboard(resetInterval = 3000, text = '') {
  const [isCopied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(text ?? window.location.href);
      setCopied(true);
    }
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (isCopied && resetInterval) {
      timeout = setTimeout(() => setCopied(false), resetInterval);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied, resetInterval]);

  return [isCopied, handleCopy] as const;
}
