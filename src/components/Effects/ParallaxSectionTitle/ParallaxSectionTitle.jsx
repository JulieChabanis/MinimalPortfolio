import { useCallback, useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";

export const ParallaxSectionSubtitle = ({ children, baseVelocity = 500 }) => {
  const baseX = useMotionValue(-450); // Démarre la position initiale à -450 pour le décalage de gauche
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 100,
    stiffness: 600,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 600], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (value) => `${value}px`); // Utilisez la valeur de baseX pour mettre à jour la position x

  const directionFactor = useRef(1);

  const updateMotionValue = useCallback(() => {
    let moveBy = directionFactor.current * baseVelocity;

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    } else {
      directionFactor.current = -1; // Ne pas mettre à jour la position si le défilement est nul
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(moveBy);
  }, [baseVelocity, baseX, directionFactor, velocityFactor]);

  useAnimationFrame(updateMotionValue);

  return (
    <div>
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
      </motion.div>
    </div>
  );
};
