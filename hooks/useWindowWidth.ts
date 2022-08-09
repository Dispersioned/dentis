import { useEffect, useState } from 'react';

export function useWindowWidth() {
  const [width, setWidth] = useState<number>();
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
}
