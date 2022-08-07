import { useEffect, useState } from 'react';

export function useIsMobile() {
  const [mobile, setMobile] = useState<boolean>();
  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 1400);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return mobile;
}
