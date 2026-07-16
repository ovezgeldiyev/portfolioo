
import { useEffect } from "react";
import Lenis from "lenis";

const lenisRef = {
  current: null,
};

const LenisProvider = () => {
  useEffect(() => {
    if (!lenisRef.current) {
      lenisRef.current = new Lenis();
    }

    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  return null;
};

// Export functions to control Lenis
export const startLenis = () => {
  if (lenisRef.current) {
    lenisRef.current.start();
  }
};

export const stopLenis = () => {
  if (lenisRef.current) {
    lenisRef.current.stop();
  }
};

export default LenisProvider;