import { useEffect, useCallback } from "react";

const SmoothScroll = ({ controls }) => {
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollPosition = scrollY + windowHeight;
    const elementPosition = 1;

    if (scrollPosition > elementPosition) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return null;
};

export default SmoothScroll;
